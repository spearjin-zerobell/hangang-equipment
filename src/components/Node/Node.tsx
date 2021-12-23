import { transJSXtoDOM } from '@/utils/babel';

interface commonProps {
  children?: HTMLElement[] | HTMLElement | ((...pram: unknown[]) => HTMLElement);
  class?: string;
  role?: string;
  tabindex?: string;
  onclick?: (e: Event) => void;
}

/** @jsx transJSXtoDOM */
export default class Node<Props = unknown, State = unknown> {
  $node: ChildNode;
  props?: Props & commonProps;
  state?: State;

  constructor(props?: Props & commonProps) {
    this.props = props;
  }

  setState(newState: Partial<State>) {
    this.state = { ...this.state, ...newState };
    this.reRender();
  }

  componentDidMount() {}

  reRender() {
    const $parent = this.$node.parentNode;
    const $newNode = this.template();

    $parent.replaceChild($newNode, this.$node as ChildNode);

    this.$node = $newNode;
  }

  render() {
    const $newNode = this.template();
    this.$node = $newNode;

    setTimeout(() => {
      this.componentDidMount();
    });
  }

  template(): HTMLElement {
    try {
      throw new Error('Method not implemented.');
    } catch (e) {
      console.error(e);
    }
    return;
  }

  static component = Symbol.for('JSComponent');
}
