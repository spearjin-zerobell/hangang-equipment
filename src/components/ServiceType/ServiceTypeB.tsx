import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './ServiceTypeB.module.scss';

interface Props {
  info: any;
}

/** @jsx dom */
export default class ServiceTypeB extends Node<Props, State> {
  template() {
    const { info } = this.props;
    return (
      <div class={styles.typeB}>
        <img src={info[0].icon} class={styles.title__icon} />
        <h2>{info[0].title}</h2>
        <ul class={styles.typeBList}>
          {info.map(item => {
            if (item.img === undefined) {
              return '';
            }
            return (
              <li class={styles.typeBList__card}>
                <img src={item.img} class={styles.typeBList__img} />
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
