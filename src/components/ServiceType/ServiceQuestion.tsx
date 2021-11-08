import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './ServiceQuestion.module.scss';
import { generateClassName } from '@/utils';

interface Props {
  questionInfo: string[];
}

/** @jsx dom */
export default class ServiceQuestion extends Node<Props, State> {
  onClickToggle = e => {
    const target = e.target;
    const answer = target.closest('.target');
    answer.classList.toggle(styles.open);
  };

  template() {
    const { questionInfo } = this.props;
    return (
      <div class={styles.question}>
        <h2>자주 묻는 질문</h2>
        <ul class={styles.question__list}>
          {questionInfo.map(item => {
            return (
              <li class={generateClassName('target', styles.question__card)} onclick={this.onClickToggle}>
                <div class={styles.question__card__title}>
                  <h3>{item.question}</h3>
                </div>
                <p>{item.answer}</p>
              </li>
            );
          })}
          {/* <li class={styles.question__card}>
            <div class={styles.question__card__title} onclick={this.onClickToggle}>
              <h3>배관설비가 무엇인가요?</h3>
              <span>⬇️</span>
            </div>
            <p>가정 내 냉온수 공급, 실내 환기, 생활 하수 배출 따위에 필요한 급수 및 배수 설비 입니다. </p>
          </li> */}
        </ul>
      </div>
    );
  }
}
