import { dom } from '@/utils/babel';
import { LandingListCard, Node } from '@/components';
import styles from './Landing.module.scss';

import mainImg from './assets/img/main.jpg';
import service1 from './assets/icon/service1.svg';
import service2 from './assets/icon/service2.svg';
import service3 from './assets/icon/service3.svg';
import service4 from './assets/icon/service4.svg';
import { generateClassName } from '@/utils';

/** @jsx dom */
export default class Landing extends Node {
  state = {
    serviceData: [
      { img: service1, title: '배관설비', explain: '배관이 문제시 사용하는 서비스' },
      {
        img: service2,
        title: '누수설비',
        explain: '냉수, 온수, 난방, 오수 배관에서 물이 누수가 되었을시 이용하는 서비스',
      },
      {
        img: service3,
        title: '난방설비',
        explain: '보일러, 난방에 문제가 있을시 이용하는 서비스',
      },
      {
        img: service4,
        title: '집수리',
        explain: '지붕수리, 싱크대, 화장실등 수리시 이용하는 서비스',
      },
    ],
  };

  template() {
    return (
      <div class={styles.land}>
        <div
          style={{ background: `url(${mainImg})`, 'background-position': 'top', 'background-size': 'cover' }}
          role="img"
          aria-label="한강건설 회사 소개 이미지"
          class={styles.main__img}
        />
        <section class={styles.land__introduce}>
          <h2 class={styles.landing__title}>한강설비</h2>
          <p class={styles.introudct__description}>
            신갈에서 제일 오래된 설비이면 과장되지 않는 가격 확실한 수리, 유지보수를 보장합니다. 수많은 노하우로 정직한
            견적으로 서비스 하겠습니다.
          </p>
          <div class={styles.introduce__divider}>
            <span class={styles.divider__title}>서비스</span>
          </div>
          <ul class={styles.main__serviceList}>
            {this.state.serviceData.map(service => {
              return <LandingListCard service={service} />;
            })}
          </ul>
        </section>

        <section class={styles.land__contact}>
          <i class={generateClassName('fas fa-phone-volume', styles.contact__img)}> </i>
          <h2 class={styles.landing__title}>전화 상담</h2>
          <span class={styles.contact__call}>031-000-0000</span>
          <span class={styles.contact__call}>010-0000-0000</span>
          <span class={styles.contact__email}>par10915@naver.com</span>
          <button class={styles.contact__btn}>연락하기</button>
        </section>
      </div>
    );
  }
}
