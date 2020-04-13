const $ = document.querySelector.bind(document);

const form = $(".form");
const dateInput = $("#data");
const quantityInput = $("#quantidade");
const valueInput = $("#valor");

const controller = new NegotiationController(
  dateInput,
  quantityInput,
  valueInput
);

form.addEventListener("submit", controller.add.bind(controller));
