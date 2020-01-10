var persona1 = {
    nombre: 'Oscar',
    apellido: 'de La Rosa',
    altura: 1.7
}

var persona2 = {
    nombre: 'Yesenia',
    apellido: 'Quintanilla',
    altura: 1.65
}

var persona3 = {
    nombre: 'Yolanda',
    apellido: 'de La Rosa Quintanilla',
    altura: 0.35
}

//const esBaja = persona => persona.altura < 1

var persona = [persona1, persona2, persona3]

//var personasBajas = persona.filter(esBaja)

//const pasarAlturaACms = persona => ({
    
  //     ... persona,
    //   altura: 100 * persona.altura
   
//})

//var personasCms = persona.map(pasarAlturaACms)



//console.log(personasCms)

const x = (acum, {altura}) => acum + altura


var alturaTotal = persona.reduce(x, 0)

console.log(alturaTotal)