let numero1 = prompt("Ingresa un número: ");
let numero2 = prompt("Ingresa un segundo número: ");
let numero3 = prompt("Ingresa un tercer número: ");

if (numero1 > numero2 && numero1 > numero3) {
    console.log(numero1, "es el número mayor");
} else if (numero2 > numero3) {
    console.log(numero2, "es el número mayor");
} else {
    console.log(numero3, "es el número mayor");
}
