import { transJSXtoDOM } from '@/utils/babel';
import { Node } from '@/components';
import style from './ProfileCard.module.scss';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { IconLookup } from '@fortawesome/fontawesome-common-types';

interface Props {
  imgSrc: string;
  name: string;
  position: string;
}

/** @jsx transJSXtoDOM */
export default class ProfileCard extends Node<Props> {
  componentDidMount() {
    this.setIcon();
  }

  setIcon() {
    const iconTemplete = icon(faPhoneAlt as IconLookup, {}).html;
    const $Icon = document.querySelector(`.fas.fa-phone-alt`);
    console.log($Icon);
    // $Icon.innerHTML = iconTemplete[0];
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
          <span class="fas fa-phone-alt"></span>
          <span>전화상담</span>
        </a>
      </li>
    );
  }
}
