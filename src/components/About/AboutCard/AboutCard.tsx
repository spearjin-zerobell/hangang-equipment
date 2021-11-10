import { dom } from '@/utils/babel';
import { Node } from '@/components';
import style from './AboutCard.module.scss';

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
        <i class={`fas ${iconClassName} fa-3x`} title={iconTitle}></i>
        <h4>{title}</h4>
        <p>{description}</p>
      </li>
    );
  }
}
