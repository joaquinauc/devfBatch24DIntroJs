let curso = prompt("¿Qué tipo de curso te interesa? (Course, Carrera, Master)");

let beca = prompt("¿Tienes alguna beca? (Facebook, Google, Jesua, ninguna)");

let precioMensual;
if (curso.toLowerCase() === "course") {
  precioMensual = 4999;
  duracion = 2;
} else if (curso.toLowerCase() === "carrera") {
  precioMensual = 3999;
  duracion = 6;
} else if (curso.toLowerCase() === "master") {
  precioMensual = 2999;
  duracion = 12;
} else {
  console.log("Curso no válido.");
}

let descuento = 0;
if (beca.toLowerCase() === "facebook") {
  descuento = 0.2;
} else if (beca.toLowerCase() === "google") {
  descuento = 0.15;
} else if (beca.toLowerCase() === "jesua") {
  descuento = 0.5;
} else {
  console.log("Beca no válida.");
}

let precioMensualDescuento = precioMensual * (1 - descuento);

let precioTotal = precioMensualDescuento * duracion;

console.log("El precio mensual de tu curso es de ",precioMensualDescuento);
console.log("El precio total de tu curso es de ",precioTotal);