export function debounce(delay = 500) {
  return function (target, key, descriptor) {
    const originalMethod = descriptor.value;
    let timer = 0;
    descriptor.value = function (...args) {
      if (event) event.preventDefault();
      clearTimeout(timer);
      timer = setTimeout(() => originalMethod.apply(this, args), delay);
    };
    return descriptor;
  };
}
