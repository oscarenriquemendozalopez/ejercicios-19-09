import readline from "node:readline";

const nep = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

nep.question("Ingrese un número entero positivo: ", (numpos)=> {
    const numero = Number(numpos);
    let suma = 0;

    for (let i = 1; i <= numero; i++) {
        suma = suma + i;
    }

    console.log("La suma obtenida es: " + suma);

    nep.close();
});