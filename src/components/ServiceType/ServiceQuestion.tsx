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
    console.log(questionInfo);
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
        </ul>
      </div>
    );
  }
}
