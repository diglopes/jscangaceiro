class NegotiationService {
  constructor() {
    this._http = new HttpService();
  }

  getTheWeekNegotiations() {
    return this._http.get("negociacoes/semana").then(
      (data) => {
        const negotiations = data.map(
          ({ data, quantidade, valor }) =>
            new Negotiation(new Date(data), quantidade, valor)
        );
        return negotiations;
      },
      (err) => {
        throw new Error("Não foi possivel obter as negociações.");
      }
    );
  }

  getLastWeekNegotiations() {
    return this._http.get("negociacoes/anterior").then(
      (data) => {
        const negotiations = data.map(
          ({ data, quantidade, valor }) =>
            new Negotiation(new Date(data), quantidade, valor)
        );
        return negotiations;
      },
      (err) => {
        throw new Error(
          "Não foi possivel obter as negociações da semana anterior."
        );
      }
    );
  }

  getOldestNegotiations() {
    return this._http.get("negociacoes/retrasada").then(
      (data) => {
        const negotiations = data.map(
          ({ data, quantidade, valor }) =>
            new Negotiation(new Date(data), quantidade, valor)
        );
        return negotiations;
      },
      (err) => {
        throw new Error(
          "Não foi possivel obter as negociações da semana retrasada."
        );
      }
    );
  }

  getPeriodNegotiations() {
    return Promise.all([
      this.getTheWeekNegotiations(),
      this.getLastWeekNegotiations(),
      this.getOldestNegotiations(),
    ])
      .then((responses) => {
        return responses.reduce((newArr, curArr) => newArr.concat(curArr), []);
      })
      .catch((err) => {
        throw new Error("Não foi possivel obter as negociações do período.");
      });
  }
}
