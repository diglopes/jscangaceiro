class Negotiations {
  constructor() {
    this._negotiationsList = [];
  }

  add(negotiation) {
    this._negotiationsList.push(negotiation);
    console.log(this._negotiationsList);
  }

  toArray() {
    return this._negotiationsList;
  }
}
