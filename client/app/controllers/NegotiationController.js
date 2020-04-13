class NegotiationController {
  constructor(_dateInput, _quantityInput, _valueInput) {
    Object.assign(this, { _dateInput, _quantityInput, _valueInput });
  }

  add(event) {
    event.preventDefault();
    const date = new Date(this._dateInput.value.replace(/-/g, ","));

    let negotiation = new Negotiation(
      date,
      parseInt(this._quantityInput.value),
      parseFloat(this._valueInput.value)
    );

    console.log(negotiation);
  }
}
