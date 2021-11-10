import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from './Title.module.scss';

interface Props {
  backgroundColor?: string;
  color?: string;
}

/** @jsx dom */
export default class Title extends Node<Props> {
  template() {
    const { backgroundColor = '#1190bb', color = 'white' } = this.props;
    return (
      <section style={{ 'background-color': backgroundColor, color }} class={styles.title__section}>
        <h2>{this.props.children}</h2>
      </section>
    );
  }
}
