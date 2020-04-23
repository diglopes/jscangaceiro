import { requiredParam } from "../index";

export function bindEvent(
  event = requiredParam("event"),
  selector = requiredParam("selector"),
  prevent = true
) {
  return function (target, propertyKey, descriptor) {
    Reflect.defineMetadata(
      "bindEvent",
      {
        event,
        selector,
        prevent,
        propertyKey,
      },
      Object.getPrototypeOf(target),
      propertyKey
    );
    return descriptor;
  };
}
