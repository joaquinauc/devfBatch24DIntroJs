let pregunta = prompt("¿Eres bellisimo/a? (si/no)")

if (pregunta.toLowerCase() == "si") {
    console.log("Ciertamente");
} else if (pregunta.toLowerCase() == "no") {
    console.log("No te creo");
} else {
    console.log("Refresca la página y vuelve a intentar con una respuesta válida");
}