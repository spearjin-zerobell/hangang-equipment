import { transJSXtoDOM } from '@/utils/babel';
import { LandingListCard, Node, Title } from '@/components';

import { stringToDOMArray } from '@/utils';

// assets
import { serviceData } from './data';
import mainImg from './assets/img/main.jpg';
import styles from './Landing.module.scss';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { IconLookup } from '@fortawesome/fontawesome-common-types';

/** @jsx transJSXtoDOM */
export default class Landing extends Node {
  getIconDOM() {
    const iconTemplete = icon(faPhoneAlt as IconLookup, {}).html;
    const $icon = stringToDOMArray(iconTemplete[0])[0] as HTMLElement;
    return $icon;
  }

  template() {
    return (
      <main class={styles.land}>
        <img src={mainImg} class={styles.main__img} />
        <Title
          title="한강설비"
          description="신갈에서 제일 오래된 설비이면 과장되지 않는 가격 확실한 수리, 유지보수를 보장합니다. 수많은 노하우로
              정직한 견적으로 서비스 하겠습니다."
        ></Title>
        <section class={styles.section}>
          <h3>서비스</h3>
          <ul class={styles.main__serviceList}>
            {serviceData.map(service => {
              return <LandingListCard service={service} />;
            })}
          </ul>
        </section>

        <section class={styles.land__contact}>
          <h2 class={styles.landing__title}>전화 상담</h2>
          <div class={styles.contact__description}>
            <p class={styles.contact__call}>고객센터: 031-000-0000</p>
            <p class={styles.contact__call}>대표번호: 010-0000-0000</p>
            <p class={styles.contact__email}>par10915@naver.com</p>
            <a href={`tel:${process.env.callNumber}`}>
              {this.getIconDOM.call(this)}
              <span>전화상담</span>
            </a>
          </div>
        </section>
      </main>
    );
  }
}
