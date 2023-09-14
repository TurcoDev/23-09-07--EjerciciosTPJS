/**  
 * Ej 2:
 * La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escriba una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.
 */

function solveQuadEquation(a, b, c) {
  const numero = b*b - 4 * a * c;
  // console.log("numero es: ", numero);
  const raizCuadrada = Math.sqrt(numero);
  // console.log("la raiz es: ", raizCuadrada);

  let x1 = (-b + raizCuadrada) / (2 * a);
  // console.log(x1);

  let x2 = (-b - raizCuadrada) / (2 * a);
  // console.log(x2);

  return [x1, x2];
}

// ax2 + bx + c = 0
// 1x2 + 2x + 1 = 0
let valorA = 1;
let valorB = 2;
let valorC = 1;
let eqCuad1 = solveQuadEquation(valorA, valorB, valorC);
console.log(eqCuad1);
let eqCuad2 = solveQuadEquation(8, 2, -15);
console.log(eqCuad2);

/**
 * Ej 5: Intercambiar valores
 */

function swapValues(a, b) {
  let c = a;
  a = b;
  b = c; 

  console.log("Valor de A: ", a, "Valor de B: ", b);
}
valorA = 3;
valorB = 5;
swapValues(valorA, valorB);
console.log("ValorA tiene: ", valorA, "ValorB tiene: ", valorB);

/**
 * Ej 6: Declare un nombre de función reverseArray. Toma un arreglo como parámetro y devuelve el reverso del arreglo (no use el método reverse).
 */

function reverseArray(arreglo) {
  // [1, 2, 3, 4] => [4, 3, 2, 1]
  let arrayResult = [];
  // version recorrido hacia adelante utilizando metodo unshift
  // for (let index = 0; index < arreglo.length; index++) {
  //   // console.log(arreglo[index]);
  //   arrayResult.unshift(arreglo[index]);
  // }

  // version recorrido hacia atras utilizando metodo push
  // for (let index = arreglo.length - 1; index >= 0; index--) {
  //   // console.log(arreglo[index]);
  //   // version con metodo de arreglos push
  //   arrayResult.push(arreglo[index]);
  // }

  // version recorrido hacia atras sin utilizar metodos de arreglos
  // let j = 0;
  // for (let index = arreglo.length - 1; index >= 0; index--) {
  //   j = arreglo.length - 1 - index;
  //   arrayResult[j] = arreglo[index];
  // }

  // return arrayResult;

  // version sin utilizar arreglo extra
  let atras = 0;
  let auxiliar = 0;
  for (let adelante = 0; adelante < arreglo.length / 2; adelante++) {
    atras = arreglo.length - 1 - adelante;
    auxiliar = arreglo[adelante];
    // arreglo[0] = arreglo[5-1-0] => arreglo[4]   iteracion 0
    // arreglo[1] = arreglo[5-1-1] => arreglo[3]   iteracion 1
    arreglo[adelante] = arreglo[atras];
    arreglo[atras] = auxiliar;
  }
  console.log(arreglo);
  return arreglo;
}

// document.write("arreglo [" + reverseArray([1,3,5,8,9]) + "]");

const imagen = document.getElementById("img1");
imagen.addEventListener("click", function () {
  reverseArray([1,3,5,8,9])
});

