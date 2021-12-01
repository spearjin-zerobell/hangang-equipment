import { Node } from '@/components';

export interface propsType {
  [prop: string]: any;
}

export const dom = (tag: string | typeof Node, props: propsType, ...children: HTMLElement[]) => {
  // 1. components
  if (typeof tag === 'function' && tag?.component === Symbol.for('yjComponent')) {
    const Component = new tag({ ...props, children });
    Component.render();
    return Component.$node;
  }

  // 2. intrinsic Elements
  const $elem = document.createElement(tag as string);

  // 2.1 attributes
  if ($elem instanceof HTMLElement) {
    Object.entries(props || {}).forEach(([propName, value]) => {
      if (!value) return;
      else if (propName === 'style') {
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
  }

  type childType = HTMLElement | Text | string;

  // 2.2 children
  const addChild = (child: childType[] | childType) => {
    try {
      if (Array.isArray(child)) {
        child.forEach(c => addChild(c));
      } else if (child instanceof HTMLElement || child instanceof Text) {
        $elem.appendChild(child);
      } else if (typeof child === 'string' || typeof child === 'number') {
        const $textNode = document.createTextNode(child);
        $elem.appendChild($textNode);
      } else if (typeof child === 'object') {
        console.log(child);
        throw new Error('객체 타입을 children으로 입력할 수 없습니다.');
      } else {
        return child;
      }
    } catch (e) {
      console.error(e);
      return;
    }
  };

  children.forEach(child => addChild(child));

  return $elem;
};
