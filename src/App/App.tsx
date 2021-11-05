import { dom } from '@/utils/babel';
import { Node } from '@/components';
// import { Header, Modal, Node } from '@/components';
// import { Router } from '@/Router/Router';

import '@/styles/normalize.css';
import '@/styles/global.css';

interface State {
  currentPage: string;
  pages: { id: string; to: string; text: string }[];
}

/** @jsx dom */
export default class App extends Node<unknown, State> {
  template() {
    return (
      <fragment>
        Test
        {/* <Modal /> */}
        {/* <Header></Header>
        <Router /> */}
        {/* <Footer></Footer> */}
      </fragment>
    );
  }
}
