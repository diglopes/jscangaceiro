class NegotiationDao {
  constructor(connection) {
    this._connection = connection;
    this._store = "negotiations";
  }

  save(negotiation) {
    return new Promise((resolve, reject) => {
      const req = this._connection
        .transaction([this._store], "readwrite")
        .objectStore(this._store)
        .add(negotiation);
      req.onsuccess = () => resolve(true);
      req.onerror = ({ target }) => {
        console.error(target.error);
        reject("Não foi possível salvar a negociação");
      };
    });
  }
}
