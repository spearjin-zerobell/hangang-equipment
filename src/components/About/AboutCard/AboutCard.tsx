import { transJSXtoDOM } from '@/utils/babel';
import { Node } from '@/components';
import style from './AboutCard.module.scss';
import { stringToDOMArray } from '@/utils';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faHandsHelping, faUserTie, faTools } from '@fortawesome/free-solid-svg-icons';
import { IconLookup } from '@fortawesome/fontawesome-common-types';

interface Props {
  title: string;
  description: string;
  iconClassName: string;
  iconTitle: string;
}

/** @jsx transJSXtoDOM */
export default class AboutCard extends Node<Props> {
  getIconArray() {
    const { iconClassName, iconTitle } = this.props;
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

    return stringToDOMArray(iconTemplete[0]);
  }

  template() {
    const { title, description } = this.props;

    return (
      <li class={style.aboutCard}>
        {this.getIconArray.call(this)}
        <h4>{title}</h4>
        <p>{description}</p>
      </li>
    );
  }
}
