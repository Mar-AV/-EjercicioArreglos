/**Dado un arreglo de 6 elementos, rota sus valores hacia la derecha una posición. El último valor debe pasar al
inicio del arreglo. */

let datos = [1, 2, 3, 4, 5, 6];
let ultimo = datos[datos.length - 1];

for (let i = datos.length - 1; i > 0; i--) {
  datos[i] = datos[i - 1];
}

datos[0] = ultimo;

console.log(datos); // [6, 1, 2, 3, 4, 5]