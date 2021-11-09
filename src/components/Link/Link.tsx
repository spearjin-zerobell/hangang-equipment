import { dom } from '@/utils/babel';
import { Node } from '@/components';
import { RouterContext } from '@/GlobalState/GlobalState';
import style from './Link.module.scss';

interface Props {
  to: string;
  state?: {
    [k: string]: any;
  };
  classFunc?: (isActive: boolean) => string;
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
    const { to, children, class: className = '', classFunc, role, tabindex, onclick } = this.props;

    const activeClass = classFunc?.(RouterContext.pathName === to) || '';

    return (
      <a
        class={(className + ' ' + activeClass + ' ' + style.link).trim()}
        role={role}
        onclick={(e: Event) => {
          this.onClick.call(this, e);
          typeof onclick === 'function' && onclick(e);
        }}
        tabindex={tabindex ?? '0'}
      >
        {children}
      </a>
    );
  }
}
