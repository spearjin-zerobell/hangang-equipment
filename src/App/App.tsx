import { dom } from '@/utils/babel';
import { Test, Node } from '@/components';

/** @jsx dom */

export default class App extends Node {
  constructor() {
    super();
    this.$target = document.createElement('div');
    this.render();
  }

  templete() {
    return (
      <div style={{ color: 'blue', 'background-color': 'white' }} width="12px">
        <Test width="1px">123</Test>
      </div>
    );
  }
}
