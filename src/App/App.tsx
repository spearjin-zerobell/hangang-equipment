import { dom } from '@/utils/babel';
import { Test, Node } from '@/components';

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

  templete() {
    return (
      <div style={{ color: 'blue', 'background-color': 'white' }} width="12px">
        {this.state.displayTest && <Test width="1px">Test</Test>}
        <button onclick={this.onClick.bind(this)}>Test삭제/보이기</button>
      </div>
    );
  }
}
