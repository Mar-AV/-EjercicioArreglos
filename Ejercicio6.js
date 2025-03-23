/**Dado dos arreglos del mismo tamaño, crea un nuevo arreglo que combine ambos de forma intercalada. */

let a = ["a", "b", "c"];
let b = [1, 2, 3];
let resultado = [];

for (let i = 0; i < a.length; i++) {
  resultado.push(a[i], b[i]);
}

console.log(resultado); // ["a", 1, "b", 2, "c", 3]