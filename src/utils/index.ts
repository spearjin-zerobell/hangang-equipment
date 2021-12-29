export function generateClassName(...classNames: string[]) {
  return classNames.join(' ');
}

export function stringToDOMArray(str: string) {
  const domParser = new DOMParser();
  const htmlDocument = domParser.parseFromString(str, 'text/html');
  const nodes = Array.from(htmlDocument.body.childNodes);

  return nodes.some(node => node.nodeType === 1) ? nodes : null;
}
