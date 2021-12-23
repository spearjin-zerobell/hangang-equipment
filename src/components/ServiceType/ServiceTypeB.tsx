import { transJSXtoDOM } from '@/utils/babel';
import { Node } from '@/components';
import styles from './ServiceTypeB.module.scss';
import { generateClassName } from '@/utils';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faTint, faTools } from '@fortawesome/free-solid-svg-icons';
import { IconLookup } from '@fortawesome/fontawesome-common-types';
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

/** @jsx transJSXtoDOM */
export default class ServiceTypeB extends Node<Props> {
  componentDidMount() {
    this.setIcon();
  }

  setIcon() {
    const { info } = this.props;

    let targetIcon;

    switch (info.title.iconClassName) {
      case 'fa-tint':
        targetIcon = faTint;
        break;
      case 'fa-tools':
        targetIcon = faTools;
        break;
    }

    const $Icon = document.querySelector(`.${styles.title__icon}`);
    const iconTemplete = icon(targetIcon as IconLookup, {}).html;

    $Icon.innerHTML = iconTemplete[0];
  }

  template() {
    const { info } = this.props;
    return (
      <div class={styles.typeB}>
        <span class={generateClassName(`fa + ${info.title.iconClassName}`, styles.title__icon)} />
        <h3>{info.title.name}</h3>
        <ul class={styles.typeBList}>
          {info.content.map(item => {
            return (
              <li class={styles.typeBList__card}>
                <img src={item.img} class={generateClassName(styles.typeBList__img)} />
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
