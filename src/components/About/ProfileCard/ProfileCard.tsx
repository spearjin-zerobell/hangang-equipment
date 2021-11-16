import { dom } from '@/utils/babel';
import { Node } from '@/components';
import style from './ProfileCard.module.scss';

interface Props {
  imgSrc: string;
  name: string;
  position: string;
}

/** @jsx dom */
export default class ProfileCard extends Node<Props> {
  template() {
    const { imgSrc, name, position } = this.props;
    return (
      <li class={style.profile}>
        <figure>
          <div class={style.imgWrapper}>
            <img src={imgSrc} alt="" />
          </div>
          <figcaption>
            <h3>{name}</h3>
            <h4>직위 - {position}</h4>
          </figcaption>
        </figure>
        <button>
          <i class="fas fa-phone-alt"></i>
          <span>상담하기</span>
        </button>
      </li>
    );
  }
}
