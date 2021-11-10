import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './Title.module.scss';

interface Props {
  color: string;
}

/** @jsx dom */
export default class Title extends Node<Props> {
  template() {
    const { color } = this.props;
    return (
      <section style={{ 'background-color': color }} class={styles.title__section}>
        <h2>{this.props.children}</h2>
      </section>
    );
  }
}
