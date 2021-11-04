import { dom } from '@/utils/babel';

/** @jsx dom */
export default class Node<Props = unknown, State = unknown> {
  $node: ChildNode;
  props?: Props & { children?: HTMLElement[] | HTMLElement | ((...pram: unknown[]) => HTMLElement) };
  state?: State;

  constructor(props?: Props & { children?: HTMLElement[] | HTMLElement | (() => HTMLElement) }) {
    this.props = props;
  }

  setState(newState: Partial<State>) {
    this.state = { ...this.state, ...newState };
    this.reRender();
  }

  reRender() {
    const $parent = this.$node.parentElement;
    const $newNode = this.template();

    // document fragment는 replaceChild에 의해 자식이 모두 사라지기 때문에
    // this.$node를 자식으로 갱신하려면 그 전에 변수에 저장해 놓아야 한다.
    let $contents;
    if ($newNode.nodeName === '#document-fragment') {
      $contents = $newNode.childNodes[0];
    } else {
      $contents = $newNode;
    }

    $parent.replaceChild($newNode, this.$node);

    this.$node = $contents;
  }

  render() {
    const $newNode = this.template();
    if ($newNode.nodeName === '#document-fragment') this.$node = $newNode.childNodes[0];
    else this.$node = $newNode;
    return $newNode;
  }

  template(): HTMLElement {
    throw new Error('Method not implemented.');
  }
}
