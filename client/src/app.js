import { NegotiationController } from "./controllers/NegotiationController.js";
import { Negotiation } from "./domain/index.js";

// Testing the POST route
const negotiation = new Negotiation(new Date(), 1, 200);
const headers = new Headers();
headers.set("Content-type", "Application/json");
const config = {
  method: "POST",
  headers,
  body: JSON.stringify(negotiation),
};
fetch("/negociacoes", config).then(() =>
  console.log("Dado enviado com sucesso!")
);

const controller = new NegotiationController();
