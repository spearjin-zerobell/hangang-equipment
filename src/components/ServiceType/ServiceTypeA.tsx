import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './ServiceTypeA.module.scss';
import { generateClassName } from '@/utils';

export interface Props {
  info: {
    title: {
      name: string;
      iconClassName: string;
    };

    content: {
      name: string;
      img: string;
    }[];
  };
}

/** @jsx dom */
export default class ServiceTypeA extends Node<Props> {
  template() {
    const { info } = this.props;
    return (
      <div class={styles.typeA}>
        <i class={generateClassName(`fa + ${info.title.iconClassName}`, styles.title__icon)} />
        <h2>{info.title.name}</h2>
        <ul class={styles.typeAList}>
          {info.content.map(item => {
            return (
              <li class={styles.typeAList__card}>
                <img src={item.img} class={styles.typeAList__img} />
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
