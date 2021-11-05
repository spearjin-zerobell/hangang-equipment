import { dom } from '@/utils/babel';
import { Node } from '@/components';
import { RouterContext } from '@/GlobalState/GlobalState';
import { About, Landing } from '@/pages';

/** @jsx dom */
export class Router extends Node<unknown, { type: boolean }> {
  constructor(props: unknown) {
    super(props);
    RouterContext.subscribe(() => this.reRender());
  }
  template() {
    return (
      <fragment>
        <Route route="/" component={Landing} />
        <Route route="/about" component={About} />
        <Route route="/service" component={About} />
        <Route route="/map" component={About} />
      </fragment>
    );
  }
}

interface RouteProps {
  route: string;
  component: any;
}

export class Route extends Node<RouteProps> {
  template() {
    const { route } = this.props;
    const Component = this.props.component;

    return location.pathname === route && <Component />;
  }
}

// interface RedirectProps {
//   component: any;
// }

// export class Redirect extends Node<RouteProps> {
//   template() {
//     const { route } = this.props;
//     const Component = this.props.component;

//     return <Component />;
//   }
// }
