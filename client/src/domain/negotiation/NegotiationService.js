import { HttpService } from "../../util/HttpService";
import { Negotiation } from "./Negotiation";
import { ApplicationException } from "../../util";

export class NegotiationService {
  constructor() {
    this._http = new HttpService();
  }

  getTheWeekNegotiations() {
    return this._http.get(`/negociacoes/semana`).then(
      (data) =>
        data.map(
          ({ data, quantidade, valor }) =>
            new Negotiation(new Date(data), quantidade, valor)
        ),
      (err) => {
        throw new ApplicationException(
          "Não foi possivel obter as negociações."
        );
      }
    );
  }

  getLastWeekNegotiations() {
    return this._http.get(`/negociacoes/anterior`).then(
      (data) =>
        data.map(
          ({ data, quantidade, valor }) =>
            new Negotiation(new Date(data), quantidade, valor)
        ),
      (err) => {
        throw new ApplicationException(
          "Não foi possivel obter as negociações da semana anterior."
        );
      }
    );
  }

  getOldestNegotiations() {
    return this._http.get(`/negociacoes/retrasada`).then(
      (data) =>
        data.map(
          ({ data, quantidade, valor }) =>
            new Negotiation(new Date(data), quantidade, valor)
        ),
      (err) => {
        throw new ApplicationException(
          "Não foi possivel obter as negociações da semana retrasada."
        );
      }
    );
  }

  async getPeriodNegotiations() {
    try {
      const period = await Promise.all([
        this.getTheWeekNegotiations(),
        this.getLastWeekNegotiations(),
        this.getOldestNegotiations(),
      ]);
      return period
        .reduce((newArr, curArr) => newArr.concat(curArr), [])
        .sort((a, b) => b.date.getTime() - a.date.getTime());
    } catch (error) {
      throw new ApplicationException(
        "Não foi possivel obter as negociações do período."
      );
    }
  }
}
