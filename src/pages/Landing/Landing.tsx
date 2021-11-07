import { dom } from '@/utils/babel';
import { Node } from '@/components';

/** @jsx dom */
export default class Landing extends Node {
  state = {};

  template() {
    return <main>Landing</main>;
  }
}
