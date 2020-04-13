class NegotiationController {
  constructor(_dateInput, _quantityInput, _valueInput) {
    Object.assign(this, { _dateInput, _quantityInput, _valueInput });
    this._negotiations = new Negotiations();
  }

  add(event) {
    event.preventDefault();
    const d = new DateConverter();
    const date = DateConverter.toDate(this._dateInput.value);
    let negotiation = new Negotiation(
      date,
      parseInt(this._quantityInput.value),
      parseFloat(this._valueInput.value)
    );
    this._negotiations.add(negotiation);
  }
}
