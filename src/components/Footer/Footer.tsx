import { transJSXtoDOM } from '@/utils/babel';
import { Node } from '@/components';
import style from './Footer.module.scss';

/** @jsx transJSXtoDOM */
export default class Footer extends Node {
  template() {
    return (
      <footer class={style.copyright}>
        <span>한강설비 ㅣ 대표 : 김영종 ㅣ 사업자등록번호 : 000-00-00000</span>{' '}
        <span>경기도 용인시 기흥구 00로 00번길 18</span>
        <span>
          © 2021 <a href="#">HANGANG Corp., Inc.</a> All rights reserved.
        </span>
      </footer>
    );
  }
}
