class NegotiationController {
  constructor(_dateInput, _quantityInput, _valueInput) {
    Object.assign(this, { _dateInput, _quantityInput, _valueInput });
    const self = this;
    this._negotiations = ProxyFactory.create(
      new Negotiations(),
      ["add", "removeAll"],
      (model) => {
        this._negotiationsView.update(model);
      }
    );
    this._negotiationsView = new NegotiationsView("#negotiations");
    this._message = ProxyFactory.create(new Message(), ["text"], (model) => {
      this._messageView.update(model);
    });
    this._messageView = new MessageView("#message-view");
  }

  add(event) {
    event.preventDefault();
    this._negotiations.add(this._createNegotiation());
    this._message.text = "Negociação adicionada com sucesso!";
    this._cleanForm();
  }

  clear() {
    this._negotiations.removeAll();
    this._message.text = "Negociações removidas!";
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
