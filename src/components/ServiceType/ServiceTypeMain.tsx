import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './ServiceTypeMain.module.scss';
import { generateClassName } from '@/utils';

interface Props {
  info: {
    title: {
      name: string;
      iconClassName: string;
    };
    content: {
      name: string;
      kind?: string;
    }[];
  };
}

/** @jsx dom */
export default class ServiceTypeMain extends Node<Props, State> {
  template() {
    const { info } = this.props;
    return (
      <div class={styles.typeMain}>
        <i class={generateClassName(`fa + ${info.title.iconClassName}`, styles.title__icon)}></i>
        <h3 class={styles.typeMainTitle}>{info.title.name}</h3>
        <ul class={styles.typeMainList}>
          {info.content.map(item => {
            return (
              <li class={styles.typeMainList__item}>
                <h4>{item.name}</h4>
                <span>{item.kind}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
