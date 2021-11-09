import { dom } from '@/utils/babel';
import { Link, Node } from '@/components';
import style from './Nav.module.scss';
import arrowSrc from './assets/arrow.svg';

/** @jsx dom */

export default class Nav extends Node {
  handleLinkActive(isActive: boolean) {
    return isActive ? style.active : '';
  }

  removeOverflowHidden() {
    document.body.style.overflow = '';
  }

  template() {
    return (
      <nav class={style.nav}>
        <span class={style.triAngle} aria-hidden="true" role="presentation"></span>
        <ul id="menu" role="menu" aria-labelledby="IDREF">
          <li role="none">
            <Link
              onclick={this.removeOverflowHidden.bind(this)}
              classFunc={this.handleLinkActive.bind(this)}
              role="menuitem"
              to="/about"
            >
              소개
            </Link>
            <img src={arrowSrc} />
          </li>
          <li>
            <Link
              onclick={this.removeOverflowHidden.bind(this)}
              classFunc={this.handleLinkActive.bind(this)}
              to="/service"
            >
              서비스
            </Link>
            <img src={arrowSrc} />
          </li>
          <li>
            <Link onclick={this.removeOverflowHidden.bind(this)} classFunc={this.handleLinkActive.bind(this)} to="/map">
              찾아오시는 길
            </Link>
            <img src={arrowSrc} />
          </li>
        </ul>
      </nav>
    );
  }
}
