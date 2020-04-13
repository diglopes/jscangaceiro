class NegotiationController {
  constructor(_dateInput, _quantityInput, _valueInput) {
    Object.assign(this, { _dateInput, _quantityInput, _valueInput });
    this._negotiations = new Negotiations();
  }

  add(event) {
    event.preventDefault();
    const date = DateConverter.toDate(this._dateInput.value);
    let negotiation = new Negotiation(
      date,
      parseInt(this._quantityInput.value),
      parseFloat(this._valueInput.value)
    );
    this._negotiations.add(negotiation);
    this._cleanForm();
  }

  _cleanForm() {
    this._dateInput.value = "";
    this._quantityInput.value = 1;
    this._valueInput.value = 0.0;
    this._dateInput.focus();
  }
}
