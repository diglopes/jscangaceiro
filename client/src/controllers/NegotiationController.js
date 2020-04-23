import { Negotiations, Negotiation, NegotiationService } from "../domain";
import {
  NegotiationsView,
  Message,
  MessageView,
  DateConverter,
  InvalidDateException,
} from "../ui";
import {
  Bind,
  getNegotiationDao,
  getExceptionMessage,
  debounce,
  controller,
  bindEvent,
} from "../util";

@controller("#data", "#quantidade", "#valor")
export class NegotiationController {
  constructor(_dateInput, _quantityInput, _valueInput) {
    Object.assign(this, { _dateInput, _quantityInput, _valueInput });
    this._negotiations = new Bind(
      new Negotiations(),
      new NegotiationsView("#negotiations"),
      "add",
      "removeAll"
    );
    this._message = new Bind(
      new Message(),
      new MessageView("#message-view"),
      "text"
    );
    this._service = new NegotiationService();
    this._init();
  }

  async _init() {
    try {
      const dao = await getNegotiationDao();
      const negotiations = await dao.getAll();
      negotiations.forEach((n) => this._negotiations.add(n));
    } catch (error) {
      this._message.text = getExceptionMessage(error);
    }
  }

  @bindEvent("submit", ".form")
  async add(event) {
    try {
      event.preventDefault();
      const negotiation = this._createNegotiation();
      const dao = await getNegotiationDao();
      await dao.save(negotiation);
      this._negotiations.add(negotiation);
      this._message.text = "Negociação adicionada com sucesso!";
      this._cleanForm();
    } catch (error) {
      if (error instanceof InvalidDateException) {
        this._message.text = getExceptionMessage(error);
      } else {
        this._message.text =
          "Um erro não esperado aconteceu. Entre em contato com o suporte.";
      }
    }
  }

  @bindEvent("click", "#botao-apaga")
  async clear() {
    try {
      const dao = await getNegotiationDao();
      await dao.deleteAll();
      this._negotiations.removeAll();
      this._message.text = "Negociações removidas!";
    } catch (error) {
      this._message.text = getExceptionMessage(error);
    }
  }

  @bindEvent("click", "#botao-importa")
  @debounce()
  async importNegotiations() {
    try {
      const negotiations = await this._service.getPeriodNegotiations();
      negotiations
        .filter((negotiation) => {
          return !this._negotiations
            .toArray()
            .some((existentNegotiation) =>
              existentNegotiation.equals(negotiation)
            );
        })
        .forEach((negotiation) => this._negotiations.add(negotiation));
      this._message.text = "Negociações importadas com sucesso!";
    } catch (error) {
      this._message.text = getExceptionMessage(error);
    }
  }

  _createNegotiation() {
    const date = DateConverter.toDate(this._dateInput.value);
    return new Negotiation(
      date,
      parseInt(this._quantityInput.value),
      parseFloat(this._valueInput.value)
    );
  }

  _cleanForm() {
    this._dateInput.value = "";
    this._quantityInput.value = 1;
    this._valueInput.value = 0.0;
    this._dateInput.focus();
  }
}
