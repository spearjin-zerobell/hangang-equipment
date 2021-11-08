import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './ServiceTypeA.module.scss';

interface Props {
  info: string[];
}

/** @jsx dom */
export default class ServiceTypeA extends Node<Props> {
  template() {
    const { info } = this.props;
    return (
      <div class={styles.typeA}>
        <img src={info[0].icon} class={styles.title__icon} />
        <h2>{info[0].title}</h2>
        <ul class={styles.typeAList}>
          {info.map(item => {
            if (item.img === undefined) {
              return '';
            }
            return (
              <li class={styles.typeAList__card}>
                <img src={item.img} class={styles.typeAList__img} />
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
