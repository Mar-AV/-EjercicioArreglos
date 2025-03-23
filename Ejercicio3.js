/**Escribe un programa que analice un arreglo de números enteros y muestre: */

let numeros = [0, -2, 5, 3, 0, -7, 9];

let positivos = 0;
let negativos = 0;
let ceros = 0;

for (let numero of numeros) {
  if (numero > 0) {
    positivos++;
  } else if (numero < 0) {
    negativos++;
  } else {
    ceros++;
  }
}

console.log("Números positivos:", positivos);
console.log("Números negativos:", negativos);
console.log("Ceros:", ceros);