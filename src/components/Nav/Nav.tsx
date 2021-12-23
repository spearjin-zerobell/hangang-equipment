import { transJSXtoDOM } from '@/utils/babel';
import { Link, Node } from '@/components';
import style from './Nav.module.scss';
import arrowSrc from './assets/arrow.svg';

/** @jsx transJSXtoDOM */

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
          <li role="none">
            <Link classFunc={this.handleLinkActive.bind(this)} role="menuitem" to="/">
              메인
            </Link>
            <img src={arrowSrc} alt="link to page" />
          </li>
          <li role="none">
            <Link classFunc={this.handleLinkActive.bind(this)} role="menuitem" to="/about">
              소개
            </Link>
            <img src={arrowSrc} alt="link to page" />
          </li>
          <li role="none">
            <Link classFunc={this.handleLinkActive.bind(this)} role="menuitem" to="/service">
              서비스
            </Link>
            <img src={arrowSrc} alt="link to page" />
          </li>
          <li role="none">
            <Link classFunc={this.handleLinkActive.bind(this)} role="menuitem" to="/map">
              찾아오시는 길
            </Link>
            <img src={arrowSrc} alt="link to page" />
          </li>
        </ul>
      </nav>
    );
  }
}
