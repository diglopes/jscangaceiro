class Negotiations {
  constructor() {
    this._negotiationsList = [];
    Object.freeze(this);
  }

  add(negotiation) {
    this._negotiationsList.push(negotiation);
    console.log(this._negotiationsList);
  }

  toArray() {
    return [].concat(this._negotiationsList);
  }

  removeAll() {
    this._negotiationsList.length = 0;
  }

  get totalVolume() {
    return this.toArray().reduce((acc, cur) => acc + cur.volume, 0);
  }
}
