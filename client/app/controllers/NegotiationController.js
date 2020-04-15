class NegotiationController {
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
  }

  add(event) {
    try {
      event.preventDefault();
      this._negotiations.add(this._createNegotiation());
      this._message.text = "Negociação adicionada com sucesso!";
      this._cleanForm();
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
    this._negotiations.removeAll();
    this._message.text = "Negociações removidas!";
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

  importNegotiations() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "negociacoes/semana");
    xhr.onreadystatechange = () => {
      // Check if the state is "finished"
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const negotiations = JSON.parse(xhr.responseText);
          negotiations.forEach((negotiation) => {
            this._negotiations.add(new Negotiation(
              new Date(negotiation.data),
              negotiation.quantidade,
              negotiation.valor
            ))
            this._message.text =
            "Negociações importadas com sucesso!";
          });
        } else {
          console.log(this);
          console.error(xhr.responseText);
          this._message.text =
            "Não foi possivel obter as negociações da semana.";
            
        }
      }
    };
    xhr.send();
  }
}
