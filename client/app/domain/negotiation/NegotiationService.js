class NegotiationService {
  getTheWeekNegotiations() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("get", "negociacoes/semana");
      xhr.onreadystatechange = () => {
        // Check if the state is "finished"
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const negotiations = JSON.parse(xhr.responseText).map(
              (negotiation) => {
                return new Negotiation(
                  new Date(negotiation.data),
                  negotiation.quantidade,
                  negotiation.valor
                );
              }
            );
            resolve(negotiations);
          } else {
            console.error(xhr.responseText);
            reject("Não foi possível importar as negociações da semana.");
          }
        }
      };
      xhr.send();
    });
  }
}
