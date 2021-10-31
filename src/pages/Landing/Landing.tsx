import { dom } from '@/utils/babel';
import { Node } from '@/components';

/** @jsx dom */
export default class Main extends Node {
  state = {};

  template() {
    const { children } = this.props;
    return <main>{children}</main>;
  }
}
