
function mostrarMensaje() {
  alert("Hola, estamos viendo eventos");
}

function mostrarMensaje2() {
  const caja2 = document.getElementById("caja2");
  // caja2.innerText = "Hola, evento desde JS";
  caja2.innerHTML = "<p class='parr'>Hola, evento desde JS</p>";
}

const caja2 = document.getElementById("caja2");
// console.log(caja2);
caja2.addEventListener("click", mostrarMensaje2);

function saliendo() {
  const caja1 = document.getElementById("caja1");
  caja1.innerText = "Saliendo de caja 3";
}