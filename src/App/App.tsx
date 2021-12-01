import { dom } from '@/utils/babel';
import { Node, Footer } from '@/components';
import { Router } from '@/Router/Router';
import 'element-closest-polyfill';
import '@/styles/index.scss';

/** @jsx dom */
export default class App extends Node {
  template() {
    return (
      <div>
        <Router />
        <Footer />
      </div>
    );
  }
}
