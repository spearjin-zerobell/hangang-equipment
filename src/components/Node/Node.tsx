import { dom } from '@/utils/babel';

/** @jsx dom */
export default class Node<Props = unknown, State = unknown> {
  $target: HTMLElement;
  props?: Props & { children?: HTMLElement[] };
  $state?: State;

  constructor(props?: Props & { children?: HTMLElement[] }) {
    this.props = props;
  }

  get target() {
    return this.$target;
  }

  setState(newState: State) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  templete() {
    return document.createDocumentFragment();
  }

  render() {
    this.$target.innerHTML = '';
    this.$target.appendChild(this.templete());
  }
}
