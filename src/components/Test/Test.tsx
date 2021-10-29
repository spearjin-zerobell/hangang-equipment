import { dom } from '@/utils/babel';
import { Node } from '@/components';

interface Props {
  width?: string;
}

interface State {
  num: number;
}

/** @jsx dom */
export default class Test extends Node<Props, State> {
  constructor(props: Props) {
    super(props);
    this.$state = {
      num: 1,
    };
    this.$target = document.createElement('li');
    this.render();
  }

  onClick() {
    this.setState({ num: ++this.$state.num });
  }

  templete() {
    const { children } = this.props;
    const { num } = this.$state;

    return (
      <div>
        <div>{children}</div>
        <div>{num}</div>
        <button onclick={this.onClick.bind(this)}>버튼</button>
      </div>
    );
  }
}
