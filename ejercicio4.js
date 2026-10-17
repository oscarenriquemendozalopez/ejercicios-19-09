import readline from "node:readline";

const cpd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

cpd.question("Ingrese la cantidad de productos elaborados por día: ", (cped) => {
    const productosdiarios = Number(cped);
    let producciontotal = 0;

    for (let dia = 1; dia <= 7; dia++) {
        producciontotal = producciontotal + productosdiarios;
    }

    console.log("Producción total de los 7 dias: " + producciontotal + " productos");

    cpd.close();
});