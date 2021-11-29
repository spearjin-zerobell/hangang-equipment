import { dom } from '@/utils/babel';
import { LandingListCard, Node, Title } from '@/components';
import styles from './Landing.module.scss';
import mainImg from './assets/img/main.jpeg';

import { generateClassName } from '@/utils';
import { serviceData } from './data';

/** @jsx dom */
export default class Landing extends Node {
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
          <div>
            <h3>서비스</h3>
          </div>
          <ul class={styles.main__serviceList}>
            {serviceData.map(service => {
              return <LandingListCard service={service} />;
            })}
          </ul>
        </section>

        <section class={styles.land__contact}>
          <h2 class={styles.landing__title}>전화 상담</h2>
          <div class={styles.contact__description}>
            <p class={styles.contact__call}>031-000-0000</p>
            <p class={styles.contact__call}>010-0000-0000</p>
            <p class={styles.contact__email}>par10915@naver.com</p>
            <button class={styles.contact__btn}>
              <i class={generateClassName('fas fa-phone-volume', styles.contact__img)}> </i>연락하기
            </button>
          </div>
        </section>
      </main>
    );
  }
}
