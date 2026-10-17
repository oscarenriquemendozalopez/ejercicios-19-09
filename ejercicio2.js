import readline from "node:readline";

const cddd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

cddd.question("Ingrese el gasto diario en transporte: $", (gdt) => {
    const gastodiario = Number(gdt);
    let gastoacumulado = 0;

    for (let dia = 1; dia <= 6; dia++) {
        gastoacumulado = gastoacumulado + gastodiario;
        console.log(`Día ${dia}: gasto acumulado = $${gastoacumulado}`);
    }

    console.log("Gasto total en los 6 días: $" + gastoacumulado);

    cddd.close();
});