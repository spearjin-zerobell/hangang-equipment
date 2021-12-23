import { transJSXtoDOM } from '@/utils/babel';
import { KaKaoMap, Node, Title } from '@/components';
import style from './Map.module.scss';

/** @jsx transJSXtoDOM */
export default class Map extends Node {
  template() {
    return (
      <main>
        <Title title="찾아오시는 길" />
        <section>
          <div class={style.way}>
            <dl>
              <KaKaoMap />
              <dt>근처 정류장:</dt>
              <dd>기흥역시외버스정류소, 신갈고속시외버스정류소, 신갈버스정류장</dd>
              <dt>근처 지하철:</dt>
              <dd>기흥역(분당선)</dd>
              <dt>근처 IC:</dt>
              <dd>수원 IC</dd>
            </dl>
          </div>
        </section>
      </main>
    );
  }
}
