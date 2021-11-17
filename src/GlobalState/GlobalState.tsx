type RouterState = string;

type listenerType = () => void;

class RouterStore {
  _pathName: RouterState;
  listeners: Set<listenerType>;

  constructor(pathName: RouterState) {
    this._pathName = pathName;
    this.listeners = new Set();
  }

  get pathName(): RouterState {
    return this._pathName;
  }

  set pathName(pathName) {
    this._pathName = pathName;
    this.publish();
  }

  subscribe(fn: listenerType) {
    this.listeners.add(fn);
  }

  publish() {
    this.listeners.forEach(fn => fn());
  }
}

export const RouterContext = new RouterStore(location.pathname);
