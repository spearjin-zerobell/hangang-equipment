import { dom } from '@/utils/babel';
import { Link, Node } from '@/components';
import style from './Nav.module.scss';
import arrowSrc from './assets/arrow.svg';

/** @jsx dom */

interface Props {
  idRef?: string;
}

export default class Nav extends Node<Props> {
  handleLinkActive(isActive: boolean) {
    return isActive ? style.active : '';
  }

  template() {
    return (
      <nav class={style.nav}>
        <ul id="menu" role="menu" aria-labelledby={this.props.idRef}>
          <li>
            <Link classFunc={this.handleLinkActive.bind(this)} role="menuitem" to="/">
              메인
            </Link>
            <img src={arrowSrc} />
          </li>
          <li role="none">
            <Link classFunc={this.handleLinkActive.bind(this)} role="menuitem" to="/about">
              소개
            </Link>
            <img src={arrowSrc} />
          </li>
          <li>
            <Link classFunc={this.handleLinkActive.bind(this)} role="menuitem" to="/service">
              서비스
            </Link>
            <img src={arrowSrc} />
          </li>
          <li>
            <Link classFunc={this.handleLinkActive.bind(this)} role="menuitem" to="/map">
              찾아오시는 길
            </Link>
            <img src={arrowSrc} />
          </li>
        </ul>
      </nav>
    );
  }
}
