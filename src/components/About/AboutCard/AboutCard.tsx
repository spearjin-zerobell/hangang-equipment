import { dom } from '@/utils/babel';
import { Node } from '@/components';
import style from './AboutCard.module.scss';
import { generateClassName } from '@/utils';
interface Props {
  title: string;
  description: string;
  iconClassName: string;
  iconTitle: string;
}

/** @jsx dom */
export default class AboutCard extends Node<Props> {
  template() {
    const { title, description, iconClassName, iconTitle } = this.props;

    return (
      <li class={style.aboutCard}>
        <i class={generateClassName(`fas ${iconClassName} fa-3x`, style.iconShadow)} title={iconTitle}></i>
        <h4>{title}</h4>
        <p>{description}</p>
      </li>
    );
  }
}
