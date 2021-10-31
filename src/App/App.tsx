import { dom } from '@/utils/babel';
import { Node } from '@/components';
import '../styles/normalize.module.scss';
import Land from '@/components/Land/Land';

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
    return (
      <div>
        <Land />
      </div>
    );
  }
}
