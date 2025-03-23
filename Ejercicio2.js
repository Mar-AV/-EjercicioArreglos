/**Dado un arreglo de calificaciones, calcula el promedio sin contar la nota más baja ni la más alta. Asegúrate de
mostrar las notas excluidas y el promedio final. */

let notas = [8.5, 9.0, 7.5, 6.0, 10.0, 5.5];

let notaMasAlta = Math.max(...notas);
let notaMasBaja = Math.min(...notas);

let notasSinExtremos = notas.filter(nota => nota !== notaMasAlta && nota !== notaMasBaja);

let sumaNotas = notasSinExtremos.reduce((acumulador, nota) => acumulador + nota, 0);
let promedio = sumaNotas / notasSinExtremos.length;

console.log("Nota más alta:", notaMasAlta);
console.log("Nota más baja:", notaMasBaja);
console.log("Promedio sin extremos:", promedio);