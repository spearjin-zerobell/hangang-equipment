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

    $menuBtn.classList.toggle(style.btnOpen);
    $nav.classList.toggle(style.navOpen);

    if ($nav.classList.contains(style.navOpen)) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  template() {
    return (
      <header class={style.header}>
        <div class={style.headerBar}>
          <Link class={style.logo} to="/">
            <img src={logoSrc} />
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
