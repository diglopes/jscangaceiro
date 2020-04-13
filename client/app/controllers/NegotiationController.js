class NegotiationController {
  constructor(_dateInput, _quantityInput, _valueInput) {
    Object.assign(this, { _dateInput, _quantityInput, _valueInput });
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
    const newDateFormat = DateConverter.toText(date);
    console.log(newDateFormat);
  }
}
