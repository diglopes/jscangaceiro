/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ApplicationException_js__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ApplicationException_js__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__ApplicationException_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bind_js__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Bind_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ConnectionFactory_js__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DaoFactory_js__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__DaoFactory_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__decorators_BindEvent_js__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__decorators_BindEvent_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__decorators_Controller_js__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__decorators_Controller_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__decorators_Debounce_js__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__decorators_Debounce_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HttpService_js__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ProxyFactory_js__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RequiredParam_js__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__RequiredParam_js__["a"]; });











/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Negotiation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index_js__ = __webpack_require__(0);


let Negotiation = class Negotiation {
  constructor(_date = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["h" /* requiredParam */]("date"), _quantity = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["h" /* requiredParam */]("quantity"), _value = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["h" /* requiredParam */]("value")) {
    Object.assign(this, {
      _quantity,
      _value
    });
    this._date = new Date(_date.getTime());
    Object.freeze(this);
  }

  get date() {
    return new Date(this._date.getTime());
  }

  get quantity() {
    return this._quantity;
  }

  get value() {
    return this._value;
  }

  get volume() {
    return this._quantity * this._value;
  }

  equals(negotiation) {
    return JSON.stringify(this) === JSON.stringify(negotiation);
  }
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
let View = class View {
  constructor(selector) {
    this._element = document.querySelector(selector);
  }

  template(model) {
    throw new Error("Method template was not implemented yet.");
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__negotiation_Negotiation_js__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__negotiation_Negotiation_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__negotiation_NegotiationDao_js__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__negotiation_NegotiationService_js__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__negotiation_NegotiationService_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__negotiation_Negotiations_js__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__negotiation_Negotiations_js__["a"]; });





/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationException; });
/* unused harmony export isApplicationException */
/* harmony export (immutable) */ __webpack_exports__["b"] = getExceptionMessage;
let ApplicationException = class ApplicationException extends Error {
  constructor(message = "") {
    super(message);
    this.name = this.constructor.name;
  }
};

const exception = ApplicationException;

function isApplicationException(err) {
  return err instanceof exception || Object.getPrototypeOf(err) instanceof exception;
}

function getExceptionMessage(err) {
  if (isApplicationException(err)) {
    return err.message;
  } else {
    console.error(err);
    return "Não foi possivel realizar a operação.";
  }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyFactory; });
let ProxyFactory = class ProxyFactory {
  static create(obj, props, action) {
    return new Proxy(obj, {
      get(target, prop) {
        if (ProxyFactory._isFunction(target[prop]) && props.includes(prop)) {
          return function () {
            target[prop].apply(target, arguments);
            action(target);
          };
        }

        return target[prop];
      },
      set(target, prop, value) {
        const updated = Reflect.set(target, prop, value);
        if (props.includes(prop)) action(target);
        return updated;
      }
    });
  }

  static _isFunction(fn) {
    return typeof fn === typeof Function;
  }
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionFactory; });
const stores = ["negotiations"];
let connection = null;
let closeConnMethod = null;

let ConnectionFactory = class ConnectionFactory {
  constructor() {
    throw new Error("Não é possível criar instâncias desta classe.");
  }

  static getConnection() {
    return new Promise((resolve, reject) => {
      if (connection) resolve(connection);
      const openRequest = indexedDB.open("jscangaceiro", 2);
      openRequest.onupgradeneeded = ({ target }) => ConnectionFactory._createStores(target.result);
      openRequest.onsuccess = ({ target }) => {
        connection = target.result;
        closeConnMethod = connection.close;
        connection.close = () => {
          throw new Error("Não é permitido fechar a conexão diretamente!");
        };
        resolve(connection);
      };
      openRequest.onerror = ({ target }) => reject(target.error);
    });
  }

  static _createStores(connection) {
    stores.forEach(store => {
      if (connection.objectStoreNames.contains(store)) {
        connection.deleteObjectStore(store);
      }
      connection.createObjectStore(store, { autoIncrement: true });
    });
  }

  static closeConnection() {
    closeConnMethod.apply(connection);
  }
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegotiationDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Negotiation_js__ = __webpack_require__(1);


let NegotiationDao = class NegotiationDao {
  constructor(connection) {
    this._connection = connection;
    this._store = "negotiations";
  }

  save(negotiation) {
    return new Promise((resolve, reject) => {
      const req = this._connection.transaction([this._store], "readwrite").objectStore(this._store).add(negotiation);
      req.onsuccess = () => resolve(true);
      req.onerror = ({ target }) => {
        console.error(target.error);
        reject("Não foi possível salvar a negociação");
      };
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const negotiations = [];
      const cursor = this._connection.transaction([this._store], "readwrite").objectStore(this._store).openCursor();

      cursor.onsuccess = ({ target }) => {
        const current = target.result;
        if (current) {
          const { _date, _quantity, _value } = current.value;
          const negotiation = new __WEBPACK_IMPORTED_MODULE_0__Negotiation_js__["a" /* Negotiation */](new Date(_date), _quantity, _value);
          negotiations.push(negotiation);
          current.continue();
        } else {
          resolve(negotiations);
        }
      };

      cursor.onerror = ({ target }) => reject(target.error);
    });
  }

  deleteAll() {
    return new Promise((resolve, reject) => {
      const request = this._connection.transaction([this._store], "readwrite").objectStore(this._store).clear();

      request.onsuccess = () => resolve(true);
      request.onerror = ({ target }) => {
        console.error(target.error);
        reject("Não foi possivel apagar as negociações.");
      };
    });
  }
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
let HttpService = class HttpService {
  _handlerError(res) {
    if (!res.ok) throw new Error(res.statusText);
    return res;
  }

  get(url) {
    return fetch(url).then(res => this._handlerError(res)).then(res => res.json());
  }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateConverter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InvalidDateException_js__ = __webpack_require__(10);


let DateConverter = class DateConverter {
  constructor() {
    throw new Error("This class should not be instatiated.");
  }

  static toText(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  static toDate(text) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(text)) {
      throw new __WEBPACK_IMPORTED_MODULE_0__InvalidDateException_js__["a" /* InvalidDateException */]();
    }
    return new Date(...text.split("/").reverse().map((item, index) => item - index % 2));
  }
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvalidDateException; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ApplicationException_js__ = __webpack_require__(4);


let InvalidDateException = class InvalidDateException extends __WEBPACK_IMPORTED_MODULE_0__util_ApplicationException_js__["a" /* ApplicationException */] {
  constructor() {
    super("A data deve estar no formato dd/mm/aaaa");
  }
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_NegotiationController_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_index_js__ = __webpack_require__(3);



// Testing the POST route
const negotiation = new __WEBPACK_IMPORTED_MODULE_1__domain_index_js__["a" /* Negotiation */](new Date(), 1, 200);
const headers = new Headers();
headers.set("Content-type", "Application/json");
const config = {
  method: "POST",
  headers,
  body: JSON.stringify(negotiation)
};
fetch("/negociacoes", config).then(() => console.log("Dado enviado com sucesso!"));

const controller = new __WEBPACK_IMPORTED_MODULE_0__controllers_NegotiationController_js__["a" /* NegotiationController */]();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegotiationController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_index_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_index_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_index_js__ = __webpack_require__(0);
var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}





let NegotiationController = (_dec = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["d" /* controller */]("#data", "#quantidade", "#valor"), _dec2 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["c" /* bindEvent */]("submit", ".form"), _dec3 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["c" /* bindEvent */]("click", "#botao-apaga"), _dec4 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["c" /* bindEvent */]("click", "#botao-importa"), _dec5 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["e" /* debounce */](), _dec(_class = (_class2 = class NegotiationController {
  constructor(_dateInput, _quantityInput, _valueInput) {
    Object.assign(this, { _dateInput, _quantityInput, _valueInput });
    this._negotiations = new __WEBPACK_IMPORTED_MODULE_2__util_index_js__["b" /* Bind */](new __WEBPACK_IMPORTED_MODULE_0__domain_index_js__["c" /* Negotiations */](), new __WEBPACK_IMPORTED_MODULE_1__ui_index_js__["e" /* NegotiationsView */]("#negotiations"), "add", "removeAll");
    this._message = new __WEBPACK_IMPORTED_MODULE_2__util_index_js__["b" /* Bind */](new __WEBPACK_IMPORTED_MODULE_1__ui_index_js__["c" /* Message */](), new __WEBPACK_IMPORTED_MODULE_1__ui_index_js__["d" /* MessageView */]("#message-view"), "text");
    this._service = new __WEBPACK_IMPORTED_MODULE_0__domain_index_js__["b" /* NegotiationService */]();
    this._init();
  }

  _init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        const dao = yield __WEBPACK_IMPORTED_MODULE_2__util_index_js__["g" /* getNegotiationDao */]();
        const negotiations = yield dao.getAll();
        negotiations.forEach(function (n) {
          return _this._negotiations.add(n);
        });
      } catch (error) {
        _this._message.text = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["f" /* getExceptionMessage */](error);
      }
    })();
  }

  add(event) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      try {
        event.preventDefault();
        const negotiation = _this2._createNegotiation();
        const dao = yield __WEBPACK_IMPORTED_MODULE_2__util_index_js__["g" /* getNegotiationDao */]();
        yield dao.save(negotiation);
        _this2._negotiations.add(negotiation);
        _this2._message.text = "Negociação adicionada com sucesso!";
        _this2._cleanForm();
      } catch (error) {
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__ui_index_js__["b" /* InvalidDateException */]) {
          _this2._message.text = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["f" /* getExceptionMessage */](error);
        } else {
          _this2._message.text = "Um erro não esperado aconteceu. Entre em contato com o suporte.";
        }
      }
    })();
  }

  clear() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      try {
        const dao = yield __WEBPACK_IMPORTED_MODULE_2__util_index_js__["g" /* getNegotiationDao */]();
        yield dao.deleteAll();
        _this3._negotiations.removeAll();
        _this3._message.text = "Negociações removidas!";
      } catch (error) {
        _this3._message.text = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["f" /* getExceptionMessage */](error);
      }
    })();
  }

  importNegotiations() {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      try {
        const negotiations = yield _this4._service.getPeriodNegotiations();
        negotiations.filter(function (negotiation) {
          return !_this4._negotiations.toArray().some(function (existentNegotiation) {
            return existentNegotiation.equals(negotiation);
          });
        }).forEach(function (negotiation) {
          return _this4._negotiations.add(negotiation);
        });
        _this4._message.text = "Negociações importadas com sucesso!";
      } catch (error) {
        _this4._message.text = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["f" /* getExceptionMessage */](error);
      }
    })();
  }

  _createNegotiation() {
    const date = __WEBPACK_IMPORTED_MODULE_1__ui_index_js__["a" /* DateConverter */].toDate(this._dateInput.value);
    return new __WEBPACK_IMPORTED_MODULE_0__domain_index_js__["a" /* Negotiation */](date, parseInt(this._quantityInput.value), parseFloat(this._valueInput.value));
  }

  _cleanForm() {
    this._dateInput.value = "";
    this._quantityInput.value = 1;
    this._valueInput.value = 0.0;
    this._dateInput.focus();
  }
}, (_applyDecoratedDescriptor(_class2.prototype, "add", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "add"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "clear", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "clear"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "importNegotiations", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "importNegotiations"), _class2.prototype)), _class2)) || _class);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bind; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProxyFactory_js__ = __webpack_require__(5);


let Bind = class Bind {
  constructor(model, view, ...props) {
    const proxy = __WEBPACK_IMPORTED_MODULE_0__ProxyFactory_js__["a" /* ProxyFactory */].create(model, props, model => view.update(model));
    view.update(model);
    return proxy;
  }
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNegotiationDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_negotiation_NegotiationDao_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConnectionFactory_js__ = __webpack_require__(6);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




let getNegotiationDao = (() => {
  var _ref = _asyncToGenerator(function* () {
    try {
      const conn = yield __WEBPACK_IMPORTED_MODULE_1__ConnectionFactory_js__["a" /* ConnectionFactory */].getConnection();
      return new __WEBPACK_IMPORTED_MODULE_0__domain_negotiation_NegotiationDao_js__["a" /* NegotiationDao */](conn);
    } catch (error) {
      throw error;
    }
  });

  return function getNegotiationDao() {
    return _ref.apply(this, arguments);
  };
})();

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindEvent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);


function bindEvent(event = __WEBPACK_IMPORTED_MODULE_0__index_js__["h" /* requiredParam */]("event"), selector = __WEBPACK_IMPORTED_MODULE_0__index_js__["h" /* requiredParam */]("selector"), prevent = true) {
  return function (target, propertyKey, descriptor) {
    Reflect.defineMetadata("bindEvent", {
      event,
      selector,
      prevent,
      propertyKey
    }, Object.getPrototypeOf(target), propertyKey);
    return descriptor;
  };
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = controller;
function controller(...selectors) {
  const elements = selectors.map(selector => document.querySelector(selector));
  return function (constructor) {
    const originalConstructor = constructor;
    const newConstructor = function () {
      const instance = new originalConstructor(...elements);
      Object.getOwnPropertyNames(originalConstructor.prototype).forEach(prop => {
        if (Reflect.hasMetadata("bindEvent", instance, prop)) {
          associateEvent(instance, Reflect.getMetadata("bindEvent", instance, prop));
        }
        newConstructor.prototype = originalConstructor.prototype;
        return newConstructor;
      });
    };
    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
  };
}

function associateEvent(instance, metadata) {
  document.querySelector(metadata.selector).addEventListener(metadata.event, event => {
    if (metadata.prevent) event.preventDefault();
    instance[metadata.propertyKey](event);
  });
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
function debounce(delay = 500) {
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

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = requiredParam;
function requiredParam(paramName) {
  throw new Error(`${paramName} é um parâmetro obrigatório!`);
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegotiationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_HttpService_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Negotiation_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_index_js__ = __webpack_require__(0);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





let NegotiationService = class NegotiationService {
  constructor() {
    this._http = new __WEBPACK_IMPORTED_MODULE_0__util_HttpService_js__["a" /* HttpService */]();
  }

  getTheWeekNegotiations() {
    return this._http.get("negociacoes/semana").then(data => data.map(({ data, quantidade, valor }) => new __WEBPACK_IMPORTED_MODULE_1__Negotiation_js__["a" /* Negotiation */](new Date(data), quantidade, valor)), err => {
      throw new __WEBPACK_IMPORTED_MODULE_2__util_index_js__["a" /* ApplicationException */]("Não foi possivel obter as negociações.");
    });
  }

  getLastWeekNegotiations() {
    return this._http.get("negociacoes/anterior").then(data => data.map(({ data, quantidade, valor }) => new __WEBPACK_IMPORTED_MODULE_1__Negotiation_js__["a" /* Negotiation */](new Date(data), quantidade, valor)), err => {
      throw new __WEBPACK_IMPORTED_MODULE_2__util_index_js__["a" /* ApplicationException */]("Não foi possivel obter as negociações da semana anterior.");
    });
  }

  getOldestNegotiations() {
    return this._http.get("negociacoes/retrasada").then(data => data.map(({ data, quantidade, valor }) => new __WEBPACK_IMPORTED_MODULE_1__Negotiation_js__["a" /* Negotiation */](new Date(data), quantidade, valor)), err => {
      throw new __WEBPACK_IMPORTED_MODULE_2__util_index_js__["a" /* ApplicationException */]("Não foi possivel obter as negociações da semana retrasada.");
    });
  }

  getPeriodNegotiations() {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        const period = yield Promise.all([_this.getTheWeekNegotiations(), _this.getLastWeekNegotiations(), _this.getOldestNegotiations()]);
        return period.reduce(function (newArr, curArr) {
          return newArr.concat(curArr);
        }, []).sort(function (a, b) {
          return b.date.getTime() - a.date.getTime();
        });
      } catch (error) {
        throw new __WEBPACK_IMPORTED_MODULE_2__util_index_js__["a" /* ApplicationException */]("Não foi possivel obter as negociações do período.");
      }
    })();
  }
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Negotiations; });
let Negotiations = class Negotiations {
  constructor() {
    this._negotiationsList = [];
    Object.freeze(this);
  }

  add(negotiation) {
    this._negotiationsList.push(negotiation);
  }

  toArray() {
    return [].concat(this._negotiationsList);
  }

  removeAll() {
    this._negotiationsList.length = 0;
  }

  get totalVolume() {
    return this.toArray().reduce((acc, cur) => acc + cur.volume, 0);
  }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_MessageView_js__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__views_MessageView_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_NegotiationsView_js__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__views_NegotiationsView_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_View_js__ = __webpack_require__(2);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Message_js__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__models_Message_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__converters_DateConverter_js__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__converters_DateConverter_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__converters_InvalidDateException_js__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__converters_InvalidDateException_js__["a"]; });









/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(2);


let MessageView = class MessageView extends __WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* View */] {
  template(model) {
    return model.text ? `
    <p class="alert alert-info">${model.text}</p>
    ` : "<p></p>";
  }
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegotiationsView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__converters_DateConverter_js__ = __webpack_require__(9);



let NegotiationsView = class NegotiationsView extends __WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* View */] {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.toArray().map(negotiation => `
                    <tr>
                        <td>${__WEBPACK_IMPORTED_MODULE_1__converters_DateConverter_js__["a" /* DateConverter */].toText(negotiation.date)}</td>
                        <td>${negotiation.quantity}</td>
                        <td>${negotiation.value}</td>
                        <td>${negotiation.volume}</td>
                    </tr>
                    `).join("")}
            </tbody>

            <tfoot>
                <tr>
                    <td colspan=3></td>
                    <td>${model.totalVolume}</td>
                </tr>
            </tfoot>
        </table>
        `;
    }
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
let Message = class Message {
  constructor(text = "") {
    this._text = text;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
  }
};

/***/ })
/******/ ]);