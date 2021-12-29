import { transJSXtoDOM } from '@/utils/babel';
import { Node } from '@/components';
import { Router } from '@/Router/Router';
import 'element-closest-polyfill';
import '@/styles/index.scss';

/** @jsx transJSXtoDOM */
export default class App extends Node {
  template() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}
