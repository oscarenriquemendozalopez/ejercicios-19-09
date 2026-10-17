import readline from "node:readline";

const cedd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

cedd.question("Ingrese la cantidad de entradas vendidas por día: ", (cdevpd) => {
    const entradasdiarias = Number(cdevpd);
    let totalentradas = 0;

    for (let dia = 1; dia <= 5; dia++) {
        totalentradas = totalentradas + entradasdiarias;
    }

    console.log("Total de entradas vendidas en 5 días: " + totalentradas);

    cedd.close();
});