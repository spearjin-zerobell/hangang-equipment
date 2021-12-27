import { Node } from '@/components';

export interface anyObjectInterface {
  [propKey: string]: any;
}

const transObjStyleToString = (styles: anyObjectInterface) => {
  return Object.entries(styles)
    .map(([styleKey, styleValue]) => `${styleKey}: ${styleValue}`)
    .join(';');
};

// @babel-plugin-transform-react-jsx에 의해 JSX 문법이 컴파일되고 이하 함수가 실행됩니다.
export const transJSXtoDOM = (tag: string | typeof Node, attrs: anyObjectInterface, ...children: HTMLElement[]) => {
  // 1. components
  if (typeof tag === 'function' && tag?.component === Symbol.for('JSComponent')) {
    const component = new tag({ ...attrs, children });
    component.render();
    return component.$node;
  }

  // 2. intrinsic Elements
  const $elem = document.createElement(tag as string);

  // 2.1 attributes 등록
  if ($elem instanceof HTMLElement) {
    Object.entries(attrs || {}).forEach(([attrKey, attrValue]) => {
      if (!attrValue) return;

      if (attrKey.startsWith('on') && attrKey in window) {
        $elem.addEventListener(attrKey.slice(2), attrValue);
        return;
      }

      $elem.setAttribute(attrKey, attrValue === 'style' ? transObjStyleToString(attrValue) : attrValue);
    });
  }

  type childType = ChildNode | HTMLElement | Text | string;

  // 2.2 children 등록
  const addChild = (child: childType[] | childType) => {
    try {
      if (Array.isArray(child)) {
        child.forEach(c => addChild(c));
      } else if (typeof child === 'string' || typeof child === 'number') {
        const $textNode = document.createTextNode(child);
        $elem.appendChild($textNode);
      } else if (child.nodeType === 1 || child.nodeType === 3) {
        // HTMLElement 이거나 TextNode의 경우
        $elem.appendChild(child);
      } else if (typeof child === 'object') {
        throw new Error('객체 타입을 children으로 입력할 수 없습니다.');
      } else {
        return;
      }
    } catch (e) {
      console.error(e);
      return;
    }
  };

  children.forEach(child => addChild(child));

  return $elem;
};
