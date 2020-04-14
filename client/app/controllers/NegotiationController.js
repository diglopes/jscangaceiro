class NegotiationController {
  constructor(_dateInput, _quantityInput, _valueInput) {
    Object.assign(this, { _dateInput, _quantityInput, _valueInput });
    const self = this;
    this._negotiations = new Proxy(new Negotiations(), {
      get(target, prop, receiver) {
        if (
          typeof target[prop] === typeof Function &&
          ["add", "removeAll"].includes(prop)
        ) {
          return function () {
            target[prop].apply(target, arguments);
            self._negotiationsView.update(target);
          };
        }

        return target[prop];
      },
    });
    this._negotiationsView = new NegotiationsView("#negotiations");
    this._message = new Message();
    this._messageView = new MessageView("#message-view");
  }

  add(event) {
    event.preventDefault();
    this._negotiations.add(this._createNegotiation());
    this._message.text = "Negociação adicionada com sucesso!";
    this._messageView.update(this._message);
    this._cleanForm();
  }

  clear() {
    this._negotiations.removeAll();
    this._message.text = "Negociações removidas!";
    this._messageView.update(this._message);
  }

  _createNegotiation() {
    const date = DateConverter.toDate(this._dateInput.value);
    return new Negotiation(
      date,
      parseInt(this._quantityInput.value),
      parseFloat(this._valueInput.value)
    );
  }

  _cleanForm() {
    this._dateInput.value = "";
    this._quantityInput.value = 1;
    this._valueInput.value = 0.0;
    this._dateInput.focus();
  }
}
