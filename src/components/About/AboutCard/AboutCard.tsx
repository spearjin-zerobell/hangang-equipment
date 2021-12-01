import { dom } from '@/utils/babel';
import { Node } from '@/components';
import style from './AboutCard.module.scss';
import { generateClassName } from '@/utils';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faHandsHelping, faUserTie, faTools } from '@fortawesome/free-solid-svg-icons';
import { IconLookup } from '@fortawesome/fontawesome-common-types';
interface Props {
  title: string;
  description: string;
  iconClassName: string;
  iconTitle: string;
}

/** @jsx dom */
export default class AboutCard extends Node<Props> {
  componentDidMount() {
    this.setIcon();
  }
  setIcon() {
    const { title, description, iconClassName, iconTitle } = this.props;
    let targetIcon;

    switch (iconClassName) {
      case 'hands-helping':
        targetIcon = faHandsHelping;
        break;
      case 'user-tie':
        targetIcon = faUserTie;
        break;
      case 'tools':
        targetIcon = faTools;
        break;
    }

    const iconTemplete = icon(targetIcon as IconLookup, {
      transform: { size: 33 },
      title: iconTitle,
    }).html;

    const $Icon = document.querySelector(`.${iconClassName}`);
    $Icon.innerHTML = iconTemplete[0];
  }

  template() {
    const { title, description, iconClassName, iconTitle } = this.props;

    return (
      <li class={style.aboutCard}>
        <span class={generateClassName(`${iconClassName}`, style.iconShadow)}></span>
        <h4>{title}</h4>
        <p>{description}</p>
      </li>
    );
  }
}
