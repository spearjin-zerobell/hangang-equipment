import { transJSXtoDOM } from '@/utils/babel';
import { Node } from '@/components';
import styles from './ServiceQuestion.module.scss';
import { generateClassName } from '@/utils';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { IconLookup } from '@fortawesome/fontawesome-common-types';

interface Props {
  questionInfo: {
    question: string;
    answer: string;
  }[];
}

/** @jsx transJSXtoDOM */
export default class ServiceQuestion extends Node<Props> {
  componentDidMount() {
    this.setIcon();
  }

  setIcon() {
    const plusIconTemplete = icon(faPlus as IconLookup, {}).html;
    const plusIcons = document.querySelectorAll(`.fas.fa-plus.fa-sm`);

    plusIcons.forEach($plusIcon => {
      $plusIcon.innerHTML = plusIconTemplete[0];
    });

    const phoneIconTemplete = icon(faPhoneAlt as IconLookup, { transform: { size: 13 } }).html;
    const $phoneIcon = document.querySelector(`.fas.fa-phone-alt`);
    $phoneIcon.innerHTML = phoneIconTemplete[0];
  }

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
                <h4 class={styles.question__card__title}>
                  {item.question}
                  <span class="fas fa-plus fa-sm" />
                </h4>
                <p class={styles.question__content}>{item.answer}</p>
              </li>
            );
          })}
        </ul>
        <a href={`tel:${process.env.callNumber}`} class={styles.question__contact}>
          <span class="fas fa-phone-alt" />
          전화상담
        </a>
      </section>
    );
  }
}
