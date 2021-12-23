import { transJSXtoDOM } from '@/utils/babel';
import { Node } from '@/components';
import styles from './LandingListCard.module.scss';

interface Props {
  service: {
    img: string;
    title: string;
    explain: string;
  };
}

/** @jsx transJSXtoDOM */
export default class LandingListCard extends Node<Props> {
  template() {
    const { service } = this.props;
    return (
      <li class={styles.service}>
        <img src={service.img} class={styles.service__icon} />
        <h3 class={styles.service__title}>{service.title}</h3>
        <span class={styles.service__description}>{service.explain}</span>
        <span class={styles.service__detail}>자세히보기</span>
      </li>
    );
  }
}
