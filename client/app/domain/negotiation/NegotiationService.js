class NegotiationService {
  constructor() {
    this._http = new HttpService();
  }

  getTheWeekNegotiations() {
    return this._http.get("negociacoes/semana").then(
      (data) =>
        data.map(
          ({ data, quantidade, valor }) =>
            new Negotiation(new Date(data), quantidade, valor)
        ),
      (err) => {
        throw new Error("Não foi possivel obter as negociações.");
      }
    );
  }

  getLastWeekNegotiations() {
    return this._http.get("negociacoes/anterior").then(
      (data) =>
        data.map(
          ({ data, quantidade, valor }) =>
            new Negotiation(new Date(data), quantidade, valor)
        ),
      (err) => {
        throw new Error(
          "Não foi possivel obter as negociações da semana anterior."
        );
      }
    );
  }

  getOldestNegotiations() {
    return this._http.get("negociacoes/retrasada").then(
      (data) =>
        data.map(
          ({ data, quantidade, valor }) =>
            new Negotiation(new Date(data), quantidade, valor)
        ),
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
      .then((responses) =>
        responses
          .reduce((newArr, curArr) => newArr.concat(curArr), [])
          .sort((a, b) => b.date.getTime() - a.date.getTime())
      )
      .catch((err) => {
        throw new Error("Não foi possivel obter as negociações do período.");
      });
  }
}
