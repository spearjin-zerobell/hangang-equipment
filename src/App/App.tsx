import { dom } from '@/utils/babel';
import { Node, Footer } from '@/components';
import { Router } from '@/Router/Router';
import 'element-closest-polyfill';
import '@fortawesome/fontawesome-free/js/all.js';
import '@/styles/normalize.css';
import '@/styles/global.css';

/** @jsx dom */
export default class App extends Node {
  template() {
    return (
      <fragment>
        <Router />
        <Footer />
      </fragment>
    );
  }
}
