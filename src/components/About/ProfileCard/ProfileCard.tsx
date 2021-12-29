import { transJSXtoDOM } from '@/utils/babel';
import { Node } from '@/components';
import style from './ProfileCard.module.scss';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { IconLookup } from '@fortawesome/fontawesome-common-types';
import { stringToDOMArray } from '@/utils';

interface Props {
  imgSrc: string;
  name: string;
  position: string;
}

/** @jsx transJSXtoDOM */
export default class ProfileCard extends Node<Props> {
  getIconDOM() {
    const iconTemplete = icon(faPhoneAlt as IconLookup, {}).html;
    return stringToDOMArray(iconTemplete[0]);
  }

  template() {
    const { imgSrc, name, position } = this.props;
    return (
      <li class={style.profile}>
        <figure>
          <div class={style.imgWrapper}>
            <img src={imgSrc} alt="직원 사진" />
          </div>
          <figcaption>
            <h3>{name}</h3>
            <h4>직위 - {position}</h4>
          </figcaption>
        </figure>
        <a href={`tel:${process.env.callNumber}`}>
          {this.getIconDOM.call(this)}
          <span>전화상담</span>
        </a>
      </li>
    );
  }
}
