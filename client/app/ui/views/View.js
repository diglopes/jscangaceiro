class View {
  constructor(selector) {
    this._element = document.querySelector(selector);
  }

  template(model) {
    throw new Error("Method template was not implemented yet.");
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
}
