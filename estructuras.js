var oscar = {
    nombre: 'Oscar',
    apellido: 'de La Rosa',
    edad: 25,
    peso: 80

}

console.log(`${oscar.nombre} tiene ${oscar.edad} años y pesa ${oscar.peso} kg`)

const INCREMENTO_PESO = 0.5

const aumentopeso = persona => persona.peso += INCREMENTO_PESO
const disminuyepeso = persona => persona.peso -= INCREMENTO_PESO
const META = 70
const comemucho = () => Math.random() < 0.5
const ejercita = () => Math.random() < 0.6
var dias = 0
while (oscar.peso > META){

    if(comemucho()){
        aumentopeso(oscar)
    }
    if(ejercita()){
        disminuyepeso(oscar)
    }
 dias ++

}










console.log(`pasaron ${dias} días`)
console.log(`Al final del años ${oscar.nombre} tiene ${oscar.edad} años y pesa ${oscar.peso.toFixed(0)} kgs`)