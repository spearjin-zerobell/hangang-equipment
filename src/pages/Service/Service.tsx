import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './Service.module.scss';
import { generateClassName } from '@/utils';

import ServiceTypeMain from '@/components/ServiceType/ServiceTypeMain';
import ServiceTypeA from '@/components/ServiceType/ServiceTypeA';
import ServiceTypeB from '@/components/ServiceType/ServiceTypeB';
import ServiceQuestion from '@/components/ServiceType/ServiceQuestion';

import { heatingInfo, leakingInfo, mainInfo, pipeInfo, questionInfo, repairsInfo } from './ServiceData';
import Title from '@/components/Title/Title';

const serviceData = {
  main: mainInfo,
  first: pipeInfo,
  second: heatingInfo,
  three: leakingInfo,
  four: repairsInfo,
};

/** @jsx dom */
class Tap extends Node {
  template() {
    return (
      <ul class={styles.service__list}>
        <li class={generateClassName('tab', styles.service__card, styles.selected)} data-type="main">
          <i class={generateClassName('fas fa-hammer', styles.card__icon)} />
          <span>전체</span>
        </li>
        <li class={generateClassName('tab', styles.service__card)} data-type="pipe">
          <i class={generateClassName('fas fa-faucet', styles.card__icon)} />
          <span>배관</span>
        </li>
        <li class={generateClassName('tab', styles.service__card)} data-type="heating">
          <i class={generateClassName('fas fa-tint', styles.card__icon)} />
          <span>난방</span>
        </li>
        <li class={generateClassName('tab', styles.service__card)} data-type="leaking">
          <i class={generateClassName('fas fa-fire', styles.card__icon)} />
          <span>누수</span>
        </li>
        <li class={generateClassName('tab', styles.service__card)} data-type="repairs">
          <i class={generateClassName('fas fa-tools', styles.card__icon)} />
          <span>집수리</span>
        </li>
      </ul>
    );
  }
}

interface State {
  type: string;
  tab: keyof typeof questionInfo;
  data: {
    title: {
      name: string;
      iconClassName: string;
    };
    content: {
      name: string;
      kind?: string;
      img?: string;
    }[];
  };
}

export default class Service extends Node<unknown, State> {
  constructor() {
    super();

    this.state = {
      data: mainInfo,
      type: 'main',
      tab: 'main',
    };
  }

  typeSelect(info: string) {
    if (info === 'main') {
      this.setState({ data: serviceData.main, type: 'main', tab: info });
    } else if (info === 'pipe') {
      this.setState({ data: serviceData.first, type: 'A', tab: info });
    } else if (info === 'heating') {
      this.setState({ data: serviceData.second, type: 'A', tab: info });
    } else if (info === 'leaking') {
      this.setState({ data: serviceData.three, type: 'B', tab: info });
    } else if (info === 'repairs') {
      this.setState({ data: serviceData.four, type: 'B', tab: info });
    }
  }

  onClickBtn = (e: Event) => {
    const target = e.target as HTMLElement;
    const $button = target.closest('.tab') as HTMLElement;
    if (!$button) return;

    this.typeSelect($button.dataset.type);
    this.selected(e);
  };

  selected(e: Event) {
    const selecte = document.querySelector('[class*=selected]');
    const target = e.target as HTMLElement;
    const $target = target.closest('.tab');
    if ($target instanceof HTMLElement) {
      document.querySelectorAll('.tab').forEach(($tab: HTMLElement) => {
        if ($tab.dataset.type === $target.dataset.type) {
          selecte.classList.remove(styles.selected);
          $tab.classList.add(styles.selected);
        }
      });
    }
  }

  template() {
    return (
      <fragment>
        <Title title='서비스'/>
        <section class={styles.service} onclick={this.onClickBtn}>
          <Tap />
          {this.state.type === 'main' ? (
            <ServiceTypeMain info={this.state.data} />
          ) : this.state.type === 'A' ? (
            <ServiceTypeA info={this.state.data} />
          ) : (
            <ServiceTypeB info={this.state.data} />
          )}
          <ServiceQuestion questionInfo={questionInfo[this.state.tab]} />
        </section>
      </fragment>
    );
  }
}
