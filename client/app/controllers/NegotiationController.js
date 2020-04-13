class NegotiationController {
  constructor(_dateInput, _quantityInput, _valueInput) {
    Object.assign(this, { _dateInput, _quantityInput, _valueInput });
    this._negotiations = new Negotiations();
    this._negotiationsView = new NegotiationsView("#negotiations");
    this._message = new Message("Negociação adicionada com sucesso!");
    this._messageView = new MessageView("#message-view");
  }

  add(event) {
    event.preventDefault();
    this._negotiations.add(this._createNegotiation());
    this._messageView.update(this._message);
    this._cleanForm();
    this._negotiationsView.update(this._negotiations);
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
