import { dom } from '@/utils/babel';
import { KaKaoMap, Node, Title } from '@/components';
import style from './Map.module.scss';
import { generateClassName } from '@/utils';

interface Props {}
interface State {}
/** @jsx dom */
export default class Map extends Node<Props, State> {
  template() {
    return (
      <main>
        <Title>찾아오시는 길</Title>
        <section>
          <KaKaoMap />
          <div class={style.way}>
            <h3>교통 편</h3>
            <dl>
              <dt>근처 정류장</dt>
              <dd>기흥역시외버스정류소, 신갈고속시외버스정류소, 신갈버스정류장</dd>
              <dt>근처 지하철</dt>
              <dd>기흥역(분당선)</dd>
              <dt>근처 IC</dt>
              <dd>수원 IC</dd>
            </dl>
          </div>
        </section>
      </main>
    );
  }
}
