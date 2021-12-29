import { transJSXtoDOM } from '@/utils/babel';
import { Footer, Header, Node } from '@/components';
import { RouterContext } from '@/GlobalState/GlobalState';

/** @jsx transJSXtoDOM */
export class Router extends Node<
  unknown,
  {
    isLoading: boolean;
    ComponentMached?: new () => Node;
  }
> {
  constructor(props: unknown) {
    super(props);
    RouterContext.subscribe(() => {
      this.onChangeComponentMached();
      this.reRender();
    });
    this.state = {
      isLoading: true,
      ComponentMached: undefined,
    };
  }

  onChangeComponentMached() {
    switch (RouterContext.pathName) {
      case '/':
        import('../pages/Landing/Landing').then(resolve =>
          this.setState({ isLoading: false, ComponentMached: resolve.default }),
        );
        break;
      case '/service':
        import('../pages/Service/Service').then(resolve =>
          this.setState({ isLoading: false, ComponentMached: resolve.default }),
        );
        break;
      case '/about':
        import('../pages/About/About').then(resolve =>
          this.setState({ isLoading: false, ComponentMached: resolve.default }),
        );
        break;
      case '/map':
        import('../pages/Map/Map').then(resolve =>
          this.setState({ isLoading: false, ComponentMached: resolve.default }),
        );
        break;
      default:
        import('../pages/Landing/Landing').then(resolve =>
          this.setState({ isLoading: false, ComponentMached: resolve.default }),
        );
    }
  }

  componentDidMount() {
    this.onChangeComponentMached();
  }

  template() {
    const { ComponentMached } = this.state;
    console.log(ComponentMached);
    return (
      <div>
        <Header />
        {ComponentMached && <ComponentMached />}
        <Footer />
      </div>
    );
  }
}
