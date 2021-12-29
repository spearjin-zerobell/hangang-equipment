import { transJSXtoDOM } from '@/utils/babel';
import { Node } from '@/components';
import styles from './ServiceTypeA.module.scss';
import { generateClassName } from '@/utils';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faFaucet, faSun } from '@fortawesome/free-solid-svg-icons';
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
    }[];
  };
}

/** @jsx transJSXtoDOM */
export default class ServiceTypeA extends Node<Props> {
  componentDidMount() {
    this.setIcon();
  }

  setIcon() {
    const { info } = this.props;

    let targetIcon;

    switch (info.title.iconClassName) {
      case 'fa-faucet':
        targetIcon = faFaucet;
        break;
      case 'fa-sun':
        targetIcon = faSun;
        break;
    }

    const $Icon = document.querySelector(`.${styles.title__icon}`);
    const iconTemplete = icon(targetIcon as IconLookup, {}).html;

    $Icon.innerHTML = iconTemplete[0];
  }

  template() {
    const { info } = this.props;
    return (
      <section class={styles.typeA}>
        <span class={generateClassName(`fa + ${info.title.iconClassName}`, styles.title__icon)} />
        <h3>{info.title.name}</h3>
        <p class={styles.typeA__explain}>배관 설비는 일반적으로 크게 두 종류로 분류한다.</p>
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
