import { dom } from '@/utils/babel';
import { Node } from '@/components';
import { Router } from '@/Router/Router';
import 'element-closest-polyfill';

import '@/styles/normalize.css';
import '@/styles/global.css';

/** @jsx dom */
export default class App extends Node {
  template() {
    return (
      <fragment>
        <Router />
        {/* <Footer></Footer> */}
      </fragment>
    );
  }
}
