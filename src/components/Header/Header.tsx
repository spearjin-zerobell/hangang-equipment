import { dom } from '@/utils/babel';
import { Link, Node, Nav } from '@/components';
import style from './Header.module.scss';

/** @jsx dom */
export default class Header extends Node {
  navButtonId = 'menubutton';

  handleToggleMenu(e: Event) {
    const $target = e.target as HTMLElement;
    const $menuBtn = $target.closest(`.${style.menuToggle}`);
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
            id="menubutton"
          >
            <span class='a11yHidden'>메뉴 버튼</span>
            <span role="presentation"></span>
          </div>
        </div>
        <Nav idRef={this.navButtonId} />
      </header>
    );
  }
}
