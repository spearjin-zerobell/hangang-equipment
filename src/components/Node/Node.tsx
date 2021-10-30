import { dom } from '@/utils/babel';

/** @jsx dom */
export default class Node<Props = unknown, State = unknown> {
  $node: HTMLElement;
  props?: Props & { children?: HTMLElement[] };
  state?: State;

  constructor(props?: Props & { children?: HTMLElement[] }) {
    this.props = props;
  }

  setState(newState: State) {
    this.state = { ...this.state, ...newState };

    const $parent = this.$node.parentElement;
    const $newNode = this.templete();
    $parent.replaceChild($newNode, this.$node);
    this.$node = $newNode;
  }

  render() {
    this.$node = this.templete();
    return this.$node;
  }

  templete(): HTMLElement {
    throw new Error('Method not implemented.');
  }
}
