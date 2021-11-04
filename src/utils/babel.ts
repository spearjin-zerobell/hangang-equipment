import { Node } from '@/components';

export interface propsType {
  [prop: string]: any;
}

export const dom = (
  tag: string | (new (props: propsType) => { render: () => HTMLElement }),
  props: propsType,
  ...children: HTMLElement[]
) => {
  // components
  if (typeof tag === 'function' && tag?.prototype.template) {
    const Component = new tag({ ...props, children });
    return Component && Component.render();
  }

  // intrinsic Elements
  const $elem =
    typeof tag === 'function' && tag.name === 'DocumentFragment'
      ? new DocumentFragment()
      : document.createElement(tag as string);

  // attributes
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

  type childType = HTMLElement | Text | DocumentFragment | string;

  // chilren
  const addChild = (child: childType[] | childType) => {
    try {
      if (Array.isArray(child)) {
        child.forEach(c => addChild(c));
      } else if (child instanceof HTMLElement || child instanceof Text) {
        $elem.appendChild(child);
      } else if (typeof child === 'string' || typeof child === 'number') {
        const $textNode = document.createTextNode(child);
        $elem.appendChild($textNode);
      } else if (child.toString().slice(8, -1) === 'DocumentFragment') {
        $elem.appendChild(child);
      } else if (typeof child === 'object') {
        throw new Error('객체 타입을 children으로 입력할 수 없습니다.');
      } else if (typeof child === 'function') {
        return child;
      } else {
        return child;
      }
    } catch (e) {
      console.log(e);
      return;
    }
  };

  children.forEach(child => addChild(child));

  return $elem;
};
