import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './ServiceTypeB.module.scss';
import { generateClassName } from '@/utils';

export interface Props {
  info: {
    title: {
      name: string;
      icon: string;
    };

    content: {
      name: string;
      img: string;
    }[];
  };
}

/** @jsx dom */
export default class ServiceTypeB extends Node<Props> {
  template() {
    const { info } = this.props;
    return (
      <div class={styles.typeB}>
        <img src={info.title.icon} class={styles.title__icon} />
        <h2>{info.title.name}</h2>
        <ul class={styles.typeBList}>
          {info.content.map(item => {
            return (
              <li class={styles.typeBList__card}>
                <img src={item.img} class={generateClassName(styles.typeBList__img, styles.before)} />
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
