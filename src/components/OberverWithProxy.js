let proxyValue = document.querySelector(".proxy__value");
let numbers = [];

let proxyCount = new Proxy(numbers, {
  set(target, prop, val) {
    if (val !== 0 && val % 2 === 0 && val !== target.counter) {
      target.counter = val;
      proxyValue.textContent = target.counter;
      return true;
    } else {
      return false;
    }
  },
});

function setProxy(num) {
  proxyCount.counter = num;
}

class EventObserver {
  constructor() {
    this.observers = [];
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

export { proxyCount, setProxy, EventObserver };
