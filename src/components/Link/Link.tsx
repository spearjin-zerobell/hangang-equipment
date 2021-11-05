import { dom } from '@/utils/babel';
import { Node } from '@/components';
import { RouterContext } from '@/GlobalState/GlobalState';
interface Props {
  to: string;
  state?: {
    [k: string]: any;
  };
}

/** @jsx dom */
export default class Link extends Node<Props> {
  onClick(e: Event) {
    const { to, state } = this.props;
    const { origin, pathname } = location;

    if (to.startsWith('/')) {
      history.pushState(state, to, origin + to);
    } else if (to.startsWith('./')) {
      history.pushState(state, to, origin + pathname + to.substr(1));
    } else {
      history.pushState(state, to, origin + pathname + '/' + to);
    }

    RouterContext.pathName = location.pathname;
  }

  template() {
    const { children, class: className, role } = this.props;
    return (
      <a class={className} role={role} onclick={this.onClick.bind(this)}>
        {children}
      </a>
    );
  }
}
