var contador = 0

const llueve = () => Math.random() < 0.15

do {
contador++
} while (!llueve())

console.log(`Pasaron ${contador} días sin llover`)