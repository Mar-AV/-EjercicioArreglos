/**Dado un arreglo de nombres que puede contener nombres repetidos, crea un nuevo arreglo que contenga solo */

let nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis", "Juan"];

let nombresUnicos = nombres.filter((nombre, indice) => nombres.indexOf(nombre) === indice);

console.log(nombresUnicos); // ["Ana", "Luis", "Pedro", "Juan"]