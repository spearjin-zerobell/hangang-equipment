import { dom } from '@/utils/babel';

interface commonProps {
  children?: HTMLElement[] | HTMLElement | ((...pram: unknown[]) => HTMLElement);
  class?: string;
  role?: string;
  tabindex?: string;
  onclick?: (e: Event) => void;
}

/** @jsx dom */
export default class Node<Props = unknown, State = unknown> {
  $node: ChildNode | ChildNode[];
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
    const $parent = Array.isArray(this.$node) ? this.$node[0].parentNode : this.$node.parentNode;
    const $newNode = this.template();

    // document fragment는 replaceChild에 의해 자식이 모두 사라지기 때문에
    // this.$node를 자식으로 갱신하려면 그 전에 변수에 저장해 놓아야 한다.
    let $contents: ChildNode | ChildNode[];
    if ($newNode?.nodeName === '#document-fragment') {
      $contents = Array.from($newNode.childNodes || []);
    } else {
      $contents = $newNode;
    }

    if (Array.isArray($contents) && Array.isArray(this.$node)) {
      for (let i = 0; i < $contents.length; i++) {
        $parent.replaceChild($contents[i], this.$node[i]);
      }
    } else {
      const $newNode = $contents as ChildNode;
      $parent.replaceChild($newNode, this.$node as ChildNode);
    }

    this.$node = $contents;
  }

  render() {
    const $newNode = this.template();
    if ($newNode.nodeName === '#document-fragment') {
      this.$node = Array.from($newNode.childNodes || []);
    } else this.$node = $newNode;

    setTimeout(() => {
      this.componentDidMount();
    });

    return $newNode;
  }

  template(): HTMLElement {
    try {
      throw new Error('Method not implemented.');
    } catch (e) {
      console.error(e);
    }
    return;
  }
}
