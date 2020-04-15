class NegotiationService {
  getTheWeekNegotiations(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "negociacoes/semana");
    xhr.onreadystatechange = () => {
      // Check if the state is "finished"
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const negotiations = JSON.parse(xhr.responseText);
          negotiations.forEach((negotiation) => {
            cb(
              null,
              new Negotiation(
                new Date(negotiation.data),
                negotiation.quantidade,
                negotiation.valor
              )
            );
          });
        } else {
          console.error(xhr.responseText);
          cb(xhr.responseText, null);
        }
      }
    };
    xhr.send();
  }
}
