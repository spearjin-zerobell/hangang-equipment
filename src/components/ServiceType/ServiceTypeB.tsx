import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './ServiceTypeB.module.scss';
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
      description?: string;
    }[];
  };
}

/** @jsx dom */
export default class ServiceTypeB extends Node<Props> {
  template() {
    const { info } = this.props;
    return (
      <div class={styles.typeB}>
        <i class={generateClassName(`fa + ${info.title.iconClassName}`, styles.title__icon)} />
        <h3>{info.title.name}</h3>
        <ul class={styles.typeBList}>
          {info.content.map(item => {
            return (
              <li class={styles.typeBList__card}>
                <div class={styles.typeB__description}>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <img src={item.img} class={generateClassName(styles.typeBList__img)} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
