import { dom } from '@/utils/babel';

/** @jsx dom */
export default class Node<Props = unknown, State = unknown> {
  $node: HTMLElement;
  props?: Props & { children?: HTMLElement[] | HTMLElement };
  state?: State;

  constructor(props?: Props & { children?: HTMLElement[] | HTMLElement }) {
    this.props = props;
  }

  setState(newState: Partial<State>) {
    this.state = { ...this.state, ...newState };

    const $parent = this.$node.parentElement;
    const $newNode = this.template();
    $parent.replaceChild($newNode, this.$node);
    this.$node = $newNode;
  }

  render() {
    this.$node = this.template();
    return this.$node;
  }

  template(): HTMLElement {
    throw new Error('Method not implemented.');
  }
}
