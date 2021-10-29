export interface propsType {
  [prop: string]: any;
}

export const dom = (
  name: string | (new (props: propsType) => { render: () => HTMLElement }),
  props: propsType,
  ...children: HTMLElement[]
) => {
  // components
  if (typeof name === 'function' && name?.prototype?.constructor) {
    name;
    const Component = new name({ ...props, children });

    return Component.render();
  }

  // intrinsic Elements
  const $elem = document.createElement(name as string);

  // attributes
  Object.entries(props || {}).forEach(([propName, value]) => {
    if (propName === 'style') {
      const styles = Object.entries(props[propName])
        .map(([key, value]) => `${key}: ${value}`)
        .join(';');
      $elem.setAttribute('style', styles);
    } else if (propName.startsWith('on') && propName in window) {
      $elem.addEventListener(propName.substr(2), value);
    } else {
      $elem.setAttribute(propName, props[propName]);
    }
  });

  // chilren
  const addChild = (child: (HTMLElement | string)[] | (HTMLElement | string)) => {
    if (Array.isArray(child)) {
      child.forEach(c => addChild(c));
    } else if (child instanceof HTMLElement) {
      $elem.appendChild(child);
    } else if (typeof child === 'string' || typeof child === 'number') {
      const $textNode = document.createTextNode(child);
      $elem.appendChild($textNode);
    } else if (typeof child === 'object') {
      throw new Error('객체 타입을 children으로 입력할 수 없습니다.');
    }
  };

  children.forEach(child => addChild(child));

  return $elem;
};
