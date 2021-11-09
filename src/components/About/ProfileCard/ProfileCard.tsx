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
      <li>
        <figure class={style.profile}>
          <img src={imgSrc} alt="" />
          <figcaption>
            <h3>{name}</h3>
            <h4>{position}</h4>
          </figcaption>
        </figure>
        <p class={style.intro}>
          ㈜인실리코젠은 국내에서 생산되는 바이오 데이터의 60% 이상을 가공하고 저장하는 데에 이바지하고 있습니다. 방대한
          데이터와의 지속적인 커뮤니케이션은 우리의 발걸음을 AI가 이끄는 새로운 세계로 향하게 하였습니다. insilico
          상에서 질병의 원인과 솔루션을 찾고, 새로운 기능의 종자를 발굴하고, 개개인에게 맞는 데이터 식품을 만드는 첨단
          기술을 구현해내면서 인공지능 기술의 실마리를 만들어냈습니다. AI가 선도할 바이오의 미래는 지난 시간 방대한
          데이터를 다루어본 그룹만이 다가설 수 있는 새로운 도전입니다. 저희 人Co는 20년 가까운 시간 동안 생물정보 외길을
          변함없이 걸어왔습니다. 앞으로의 Bioinformatics는 AI의 도움을 받아 지금껏 만나보지 못한 insilico 상의 변화를
          만들어낼 것입니다. 이러한 변화와 혁신이 BI가 궁극적으로 추구하고자 하는 새로운 가치에 이바지할 수 있도록
          콘텐츠와 서비스를 simple하게 디자인하겠습니다. 저희와 같이 하는 많은 연구자들이 Insilicogen’s Experience를
          향상할 수 있도록 한층 더 노력하는 기업이 되겠습니다. 늘 그래 왔듯 사람을 중심에 두고 기술의 진일보를 꿈꾸는
          ㈜인실리코젠이 되도록 매진하겠습니다. 많은 관심과 성원 부탁드립니다. ㈜인실리코젠 대표이사 최 남 우.
        </p>
      </li>
    );
  }
}
