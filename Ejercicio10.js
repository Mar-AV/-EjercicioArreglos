/**Dado un arreglo de números, encuentra el número que más veces se repite y cuántas veces aparece. */

let datos = [3, 5, 3, 2, 3, 2, 4, 5, 5, 5];

const numeroMasRepetido = (arreglo) => {
  let conteo = {};
  let numeroMasRepetido = arreglo[0];
  let maxRepeticiones = 1;

  arreglo.forEach(numero => {
    conteo[numero] = (conteo[numero] || 0) + 1;

    if (conteo[numero] > maxRepeticiones) {
      maxRepeticiones = conteo[numero];
      numeroMasRepetido = numero;
    }
  });

  return {
    numero: numeroMasRepetido,
    repeticiones: maxRepeticiones,
  };
};

const resultado = numeroMasRepetido(datos);

console.log(`${resultado.numero} (${resultado.repeticiones} veces)`); // 5 (4 veces)