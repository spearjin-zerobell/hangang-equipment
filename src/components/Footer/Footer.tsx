import { dom } from '@/utils/babel';
import { Node } from '@/components';
import style from './Footer.module.scss';

interface Props {}
interface State {}

/** @jsx dom */
export default class Footer extends Node<Props, State> {
  state = {};

  template() {
    return (
      <footer class={style.copyright}>
        <span>한강설비 ㅣ 대표 : 박창진 ㅣ 사업자등록번호 : 159-88-01629</span>{' '}
        <span>경기도 용인시 기흥구 신구로53번길 18</span>
        <span>
          © 2021 <a href="#">HANGANG Corp., Inc.</a> All rights reserved.
        </span>
      </footer>
    );
  }
}
