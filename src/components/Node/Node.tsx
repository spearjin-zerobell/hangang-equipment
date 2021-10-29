import { dom } from '@/utils/babel';

/** @jsx dom */
export default class Node<Props = unknown, State = unknown> {
  $dom: HTMLElement;
  props?: Props & { children?: HTMLElement[] };
  state?: State;

  constructor(props?: Props & { children?: HTMLElement[] }) {
    this.props = props;
  }

  setState(newState: State) {
    this.state = { ...this.state, ...newState };
    this.$dom.replaceWith(this.render());
  }

  render() {
    this.$dom = this.templete();
    return this.$dom;
  }

  templete(): HTMLElement {
    throw new Error('Method not implemented.');
  }
}
