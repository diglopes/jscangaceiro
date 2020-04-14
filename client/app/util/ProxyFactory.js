class ProxyFactory {
  static create(obj, props, action) {
    return new Proxy(obj, {
      get(target, prop) {
        if (typeof target[prop] === typeof Function && props.includes(prop)) {
          return function () {
            target[prop].apply(target, arguments);
            action(target);
          };
        }

        return target[prop];
      },
    });
  }
}
