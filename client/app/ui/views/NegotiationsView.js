class NegotiationsView {
  constructor(selector) {
    this._element = document.querySelector(selector);
  }

  template(model) {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model
                  .toArray()
                  .map(
                    (negotiation) =>
                      `
                    <tr>
                        <td>${DateConverter.toText(negotiation.date)}</td>
                        <td>${negotiation.quantity}</td>
                        <td>${negotiation.value}</td>
                        <td>${negotiation.volume}</td>
                    </tr>
                    `
                  )
                  .join("")}
            </tbody>

            <tfoot></tfoot>
        </table>
        `;
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
}
