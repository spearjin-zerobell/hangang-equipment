import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './LandingListCard.module.scss';
import { generateClassName } from '@/utils';

interface Props {
  service: {
    iconClassName: string;
    title: string;
    explain: string;
  };
}

/** @jsx dom */
export default class LandingListCard extends Node<Props> {
  template() {
    const { service } = this.props;
    return (
      <li class={styles.service}>
        <div>
          <i class={generateClassName(`fa + ${service.iconClassName}`, styles.service__icon)} />
        </div>
        <h4 class={styles}>{service.title}</h4>
        <span class={styles.service__description}>{service.explain}</span>
        <span class={styles.service__detail}>자세히보기</span>
      </li>
    );
  }
}
