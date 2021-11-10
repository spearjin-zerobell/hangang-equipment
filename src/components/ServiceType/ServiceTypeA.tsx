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
      img?: string;
    }[];
  };
}

/** @jsx dom */
export default class ServiceTypeA extends Node<Props> {
  template() {
    const { info } = this.props;
    return (
      <section class={styles.typeA}>
        <i class={generateClassName(`fa + ${info.title.iconClassName}`, styles.title__icon)} />
        <h3>{info.title.name}</h3>
        <ul class={styles.typeAList}>
          {info.content.map((item, i) => {
            return (
              <li class={styles.typeAList__card}>
                <img src={item.img} class={styles.typeAList__img} />
                <span>{i + 1 + '.' + ' ' + item.name}</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
