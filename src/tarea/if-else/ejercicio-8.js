let calificacion = prompt("Ingrese alguna calficiación del 1 al 10: ");

if (calificacion < 6) {
    console.log("reprobado");
} else if (calificacion >= 6 && calificacion <= 8) {
    console.log("regular");
} else if (calificacion == 9) {
    console.log("bien");
} else {
    console.log("excelente");
}