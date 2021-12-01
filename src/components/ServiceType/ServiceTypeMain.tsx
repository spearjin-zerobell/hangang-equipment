import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './ServiceTypeMain.module.scss';
import { generateClassName } from '@/utils';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { IconLookup } from '@fortawesome/fontawesome-common-types';
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
export default class ServiceTypeMain extends Node<Props> {
  componentDidMount() {
    this.setIcon();
  }

  setIcon() {
    const { info } = this.props;

    const $Icon = document.querySelector(`.${styles.title__icon}`);
    const iconTemplete = icon(faHammer as IconLookup, {}).html;

    $Icon.innerHTML = iconTemplete[0];
  }

  template() {
    const { info } = this.props;
    return (
      <div class={styles.typeMain}>
        <span class={generateClassName(`fa + ${info.title.iconClassName}`, styles.title__icon)}></span>
        <h3>{info.title.name}</h3>
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
