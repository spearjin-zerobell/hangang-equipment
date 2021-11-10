import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './ServiceQuestion.module.scss';
import { generateClassName } from '@/utils';

interface Props {
  questionInfo: {
    question: string;
    answer: string;
  }[];
}

/** @jsx dom */
export default class ServiceQuestion extends Node<Props> {
  onClickToggle = (e: Event) => {
    const target = e.target as HTMLElement;
    const answer = target.closest('.target');
    answer.classList.toggle(styles.open);
  };

  template() {
    const { questionInfo } = this.props;
    return (
      <section class={styles.question}>
        <h3>자주 묻는 질문</h3>
        <ul class={styles.question__list}>
          {questionInfo.map(item => {
            return (
              <li class={generateClassName('target', styles.question__card)} onclick={this.onClickToggle}>
                <h4 class={styles.question__card__title}>{item.question}</h4>
                <p class={styles.question__content}>{item.answer}</p>
              </li>
            );
          })}
        </ul>
        <button class={styles.question__contact}>
          <i class="fas fa-phone-alt"></i>전화상담
        </button>
      </section>
    );
  }
}
