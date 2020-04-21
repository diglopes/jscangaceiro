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

  getAll() {
    return new Promise((resolve, reject) => {
      const negotiations = [];
      const cursor = this._connection
        .transaction([this._store], "readwrite")
        .objectStore(this._store)
        .openCursor();

      cursor.onsuccess = ({ target }) => {
        const current = target.result;
        if (current) {
          const { date, quantity, value } = current;
          const negotiation = new Negotiation(new Date(date), quantity, value);
          negotiations.push(negotiation);
          current.continue();
        } else {
          resolve(negotiations);
        }
      };

      cursor.onerror = ({ target }) => reject(target.error);
    });
  }
}
