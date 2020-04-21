import { Negotiations } from "../domain/negotiation/Negotiations.js";
import { Negotiation } from "../domain/negotiation/Negotiation.js";
import { NegotiationsView } from "../ui/views/NegotiationsView.js";
import { Message } from "../ui/models/Message.js";
import { MessageView } from "../ui/views/MessageView.js";
import { NegotiationService } from "../domain/negotiation/NegotiationService.js";
import { getNegotiationDao } from "../util/DaoFactory.js";
import { DateConverter } from "../ui/converters/DateConverter.js";
import { Bind } from "../util/Bind.js";
import { InvalidDateException } from "../ui/converters/InvalidDateException.js";

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

  _init() {
    getNegotiationDao()
      .then((dao) => dao.getAll())
      .then((negotiations) => {
        negotiations.forEach((n) => this._negotiations.add(n));
      });
  }

  add(event) {
    try {
      const negotiation = this._createNegotiation();
      event.preventDefault();
      getNegotiationDao()
        .then((dao) => {
          dao.save(negotiation);
        })
        .then(() => {
          this._negotiations.add(negotiation);
          this._message.text = "Negociação adicionada com sucesso!";
          this._cleanForm();
        })
        .catch((err) => (this._message.text = err));
    } catch (error) {
      console.error(error);
      if (error instanceof InvalidDateException) {
        this._message.text = error.message;
      } else {
        this._message.text =
          "Um erro não esperado aconteceu. Entre em contato com o suporte.";
      }
    }
  }

  clear() {
    getNegotiationDao()
      .then((dao) => dao.deleteAll())
      .then(() => {
        this._negotiations.removeAll();
        this._message.text = "Negociações removidas!";
      })
      .catch((err) => {
        this._message.text = err;
      });
  }

  importNegotiations() {
    this._service
      .getPeriodNegotiations()
      .then((negotiations) => {
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
      })
      .catch((err) => (this._message.text = err));
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
