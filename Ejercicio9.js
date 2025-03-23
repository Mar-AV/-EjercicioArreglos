/**Escribe un programa que reciba un arreglo de palabras y devuelva un nuevo arreglo con aquellas que tengan más */

let palabras = ["sol", "ventilador", "mesa", "lámpara", "computadora"];

function filtrarPalabras(arreglo) {
  return arreglo.filter(palabra => palabra.length > 5);
}

let palabrasFiltradas = filtrarPalabras(palabras);

console.log(palabrasFiltradas); // ["ventilador", "lámpara", "computadora"]