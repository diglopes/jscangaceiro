class Negotiations {
  constructor(renderStrategy) {
    this._negotiationsList = [];
    this._renderStrategy = renderStrategy;
    Object.freeze(this);
  }

  add(negotiation) {
    this._negotiationsList.push(negotiation);
    this._renderStrategy(this);
  }

  toArray() {
    return [].concat(this._negotiationsList);
  }

  removeAll() {
    this._negotiationsList.length = 0;
    this._renderStrategy(this);
  }

  get totalVolume() {
    return this.toArray().reduce((acc, cur) => acc + cur.volume, 0);
  }
}
