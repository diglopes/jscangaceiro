import { View } from "./View";
import { DateConverter } from "../converters/DateConverter";

export class NegotiationsView extends View {
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

            <tfoot>
                <tr>
                    <td colspan=3></td>
                    <td>${model.totalVolume}</td>
                </tr>
            </tfoot>
        </table>
        `;
  }
}
