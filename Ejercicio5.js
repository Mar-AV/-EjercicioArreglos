/**Escribe un programa que verifique si los elementos de un arreglo están en orden ascendente (es decir, cada
número debe ser mayor o igual al anterior). */

function esAscendente(arreglo) {
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] < arreglo[i - 1]) {
        return false; // Si un elemento es menor que el anterior, no está en orden ascendente
      }
    }
    return true; // Todos los elementos están en orden ascendente
  }
  
  let secuencia = [2, 4, 6, 6, 9];
  let otra = [5, 3, 8];
  
  console.log(esAscendente(secuencia)); // true
  console.log(esAscendente(otra)); // false