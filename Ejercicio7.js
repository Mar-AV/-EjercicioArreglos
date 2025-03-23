/**Dado un arreglo con palabras, muestra cuántas vocales tiene cada palabra. */

let palabras = ["computadora", "mesa", "silla", "mouse"];

function contarVocales(palabra) {
  let vocales = "aeiouAEIOU";
  let contador = 0;

  for (let letra of palabra) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

for (let palabra of palabras) {
  let cantidadVocales = contarVocales(palabra);
  console.log(`${palabra}: ${cantidadVocales} vocales`);
}