class MessageView {
  constructor(selector) {
    this._element = document.querySelector(selector);
  }

  template(model) {
    return `
      <p class="alert alert-success">${model.text}</p>
      `;
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
}
