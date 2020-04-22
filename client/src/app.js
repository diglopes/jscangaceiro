import { NegotiationController } from "./controllers/NegotiationController.js";

const $ = document.querySelector.bind(document);

const form = $(".form");
const btnClear = $("#botao-apaga");
const importBtn = $("#botao-importa");

const controller = new NegotiationController();

form.addEventListener("submit", controller.add.bind(controller));
btnClear.addEventListener("click", controller.clear.bind(controller));
importBtn.addEventListener(
  "click",
  controller.importNegotiations.bind(controller)
);
