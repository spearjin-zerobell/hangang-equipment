import { dom } from '@/utils/babel';
import { Node, AboutCard, ProfileCard } from '@/components';
import style from './About.module.scss';
import data from './data';
import { generateClassName } from '@/utils';
/** @jsx dom */
export default class About extends Node<unknown, { type: boolean }> {
  template() {
    return (
      <main class={style.main}>
        <section class={generateClassName(style.section, style.backgroundBlue)}>
          <h2>회사 소개</h2>
        </section>
        <section class={style.section}>
          <h3>인사말</h3>
          <p class={style.p}>
            1993년에 설립된 종합 전문 설비 업체인 한강 설비는 빠르고 정확한 원인 분석, 철저한 AS로 항상 고객만족에
            최선을 다해왔습니다. 30년 경력의 축적된 기술로 늘 그래 왔듯 사람을 중심에 두고 회사의 성장을 추구하는 한강
            설비가 되도록 매진하겠습니다.
          </p>
        </section>
        <section class={generateClassName(style.section, style.backgroundGray)}>
          <h3>한강설비 철학</h3>
          <ul>
            {data.map(({ title, description, iconClassName, iconTitle }) => (
              <AboutCard title={title} description={description} iconClassName={iconClassName} iconTitle={iconTitle} />
            ))}
          </ul>
        </section>
        <section class={style.section}>
          <h3>직원 소개</h3>
          <ul>
            <ProfileCard
              imgSrc="https://www.taycor.com/wp-content/uploads/img-Michael-Hong-v1.jpg"
              name="김영종"
              position="대표"
            />
          </ul>
        </section>
      </main>
    );
  }
}
