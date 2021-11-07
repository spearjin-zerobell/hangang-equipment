import { dom } from '@/utils/babel';
import { Node } from '@/components';
import { Route, Router } from '@/Router/Router';

/** @jsx dom */
export default class About extends Node<unknown, { type: boolean }> {
  state = { type: true };

  template() {
    return <div>About</div>;
  }
}
