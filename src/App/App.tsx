import { dom } from '@/utils/babel';
import { Node, Header } from '@/components';
import styles from '../styles/normalize.module.scss';
import { Landing } from '@/pages';

interface State {
  currentPage: string;
  pages: { id: string; to: string; text: string }[];
}

/** @jsx dom */
export default class App extends Node<unknown, State> {
  state = {
    currentPage: 'landing',
    pages: [
      { id: 'landing', to: '/', text: '홈' },
      { id: 'about', to: '/about', text: '소개' },
      { id: 'service', to: '/service', text: '서비스' },
      { id: 'contact', to: '/customer', text: '고객센터' },
    ],
  };

  renderPage() {
    switch (this.state.currentPage) {
      case 'landing':
        return <Landing />;
      // case 'about':
      //   return <About />;
      // case 'service':
      //   return <Service />;
      // case 'contact':
      //   return <Contact />;
      default:
        return <Landing />;
    }
  }

  template() {
    return (
      <div>
        <Header></Header>
        <main>{this.renderPage()}</main>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}
