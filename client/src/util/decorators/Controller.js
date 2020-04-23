export function controller(...selectors) {
  const elements = selectors.map((selector) =>
    document.querySelector(selector)
  );
  return function (constructor) {
    const originalConstructor = constructor;
    const newConstructor = function () {
      const instance = new originalConstructor(...elements);
      Object.getOwnPropertyNames(originalConstructor.prototype).forEach(
        (prop) => {
          if (Reflect.hasMetadata("bindEvent", instance, prop)) {
            associateEvent(
              instance,
              Reflect.getMetadata("bindEvent", instance, prop)
            );
          }
          newConstructor.prototype = originalConstructor.prototype;
          return newConstructor;
        }
      );
    };
    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
  };
}

function associateEvent(instance, metadata) {
  document
    .querySelector(metadata.selector)
    .addEventListener(metadata.event, (event) => {
      if (metadata.prevent) event.preventDefault();
      instance[metadata.propertyKey](event);
    });
}
