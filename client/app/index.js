const tbody = document.querySelector("tbody");
const form = document.querySelector(".form");

const fields = [
  document.querySelector("#data"),
  document.querySelector("#valor"),
  document.querySelector("#quantidade"),
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const tr = document.createElement("tr");
  fields.forEach((field) => {
    const td = document.createElement("td");
    td.textContent = field.value;
    tr.appendChild(td);
  });

  const tdVolume = document.createElement("td");
  tdVolume.textContent = fields[1].value * fields[2].value;
  tr.appendChild(tdVolume);
  tbody.appendChild(tr);
});
