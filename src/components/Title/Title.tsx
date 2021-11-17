import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './Title.module.scss';
import { generateClassName } from '@/utils';

interface Props {
  title: string,
  description ?: string,
}

/** @jsx dom */
export default class Title extends Node<Props> {
  template() {
    const { title, description } = this.props;
    return (
      <section class={generateClassName(styles.title__section)}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </section>
    );
  }
}
