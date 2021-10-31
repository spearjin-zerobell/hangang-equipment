import { dom } from '@/utils/babel';
import { Node } from '@/components';
import styles from '../styles/normalize.module.scss';

interface State {
  displayTest: boolean;
}

/** @jsx dom */
export default class App extends Node<unknown, State> {
  constructor() {
    super();
    this.state = {
      displayTest: true,
    };
  }

  onClick() {
    this.setState({ displayTest: !this.state.displayTest });
  }

  template() {
    return <div class={styles.global}></div>;
  }
}
