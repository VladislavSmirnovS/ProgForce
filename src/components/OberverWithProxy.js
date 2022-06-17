class EventObserver {
  constructor(obj) {
    this.observers = [];
    this.proxyCount = new Proxy(obj, {
      set(target, prop, val) {
        if (val !== 0 && val % 2 === 0 && val !== target.counter) {
          target.counter = val;
          return true;
        } else {
          return false;
        }
      },
    });
  }

  proxyChange() {
    console.log(this.proxyCount)
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter(
      (subscriber) => subscriber !== observer
    );
  }
  broadcast(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

export { EventObserver };
 