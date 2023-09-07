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
 * Ej 6: Declare un nombre de función reverseArray. Toma una matriz como parámetro y devuelve el reverso de la matriz (no use el método).
 */

function reverseArray(arreglo) {
  // [1, 2, 3, 4] => [4, 3, 2, 1]

}

