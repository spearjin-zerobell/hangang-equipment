/**
 * @jest-environment jsdom
 */

import { stringToDOMArray } from '.';

const isSameDOMArray = (arr: ChildNode[], compArr: ChildNode[]) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].isEqualNode(compArr[i])) return false;
  }

  return true;
};

describe('stringToDOM', function () {
  test('<div>123</div> string to childNode[]', () => {
    const DOMArray = stringToDOMArray('<div>123</div>');
    const compDOM = document.createElement('div');
    compDOM.textContent = '123';

    expect(isSameDOMArray(DOMArray, [compDOM])).toBeTruthy();
  });

  test('<a href=123>1</a><a href=123>2</a> string to childNode[]', () => {
    const DOMArray = stringToDOMArray('<a href=123>1</a><a href=123>2</a>');
    const compAnchorDOM1 = document.createElement('a');
    const compAnchorDOM2 = document.createElement('a');
    compAnchorDOM1.setAttribute('href', '123');
    compAnchorDOM2.setAttribute('href', '123');
    compAnchorDOM1.textContent = '1';
    compAnchorDOM2.textContent = '2';

    expect(isSameDOMArray(DOMArray, [compAnchorDOM1, compAnchorDOM2])).toBeTruthy();
  });
});
