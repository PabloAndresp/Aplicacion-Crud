
let form = document.getElementById("form");
let table = document.getElementById("table");
let data = JSON.parse(localStorage.getItem("data")) || [];



form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  data.push({name, email});
  localStorage.setItem("data", JSON.stringify(data));
  render();
});

function render() {
  table.innerHTML = "";
  data.forEach((item, index) => {
    let row = table.insertRow();
    let cellName = row.insertCell();
    let cellEmail = row.insertCell();
    let cellActions = row.insertCell();
    cellName.innerHTML = item.name;
    cellEmail.innerHTML = item.email;
    cellActions.innerHTML = `<button onclick="edit(${index})">Editar</button> <button onclick="remove(${index})">Eliminar</button>`;
  });
}


function remove(index) {
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    render();
  }
  
function edit(index) {
  let name = prompt("Ingresa el nuevo nombre:");
  let email = prompt("Ingresa el nuevo email:");
  data[index] = {name, email};
  localStorage.setItem("data", JSON.stringify(data));

  render();
}
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", JSON.stringify(data));
  } else {
    data = JSON.parse(localStorage.getItem("data"));
    render();
  }
});





