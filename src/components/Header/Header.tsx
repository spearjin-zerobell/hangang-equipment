import { dom } from '@/utils/babel';
import { Link, Node, Nav } from '@/components';
import style from './Header.module.scss';
import logoSrc from './assets/img/logo.png';

/** @jsx dom */
export default class Header extends Node<unknown, { isOpenMenu: boolean }> {
  state = {
    isOpenMenu: true,
  };

  handleToggleMenu(e: Event) {
    const $menuBtn = e.target as HTMLElement;
    const $nav = $menuBtn.closest('header').querySelector('[class*=nav]') as HTMLElement;

    if ($nav.classList.contains(style.navOpen)) {
      $menuBtn.classList.remove(style.btnOpen);
      $nav.classList.remove(style.navOpen);
    } else {
      $menuBtn.classList.add(style.btnOpen);
      $nav.classList.add(style.navOpen);
    }
  }

  template() {
    return (
      <header class={style.header}>
        <div class={style.headerBar}>
          <Link class={style.logo} to="/">
            H
          </Link>
          <div
            tabindex="0"
            class={style.menuToggle}
            onclick={this.handleToggleMenu.bind(this)}
            role="button"
            aria-controls="menu"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <span role="presentation"></span>
          </div>
        </div>
        <Nav />
      </header>
    );
  }
}
