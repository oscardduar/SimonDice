var x = 25, y = '25'

var sacha = {
    nombre: 'sacha',
    edad: 25,
    ingeniero: false,
    carpintero: true,
    mecanico: false

}

var marcos = {
    nombre: 'marcos',
    edad: 16
}

const MAYOR_DE_EDAD = 18

function imprimirProfesiones(persona){
    console.log(persona.nombre + ' es ')
    if (persona.ingeniero){
         console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }
     if (persona.carpintero === false){
         console.log('No es carpintero')
     } else {
         console.log('Carpintero')
     }

}

 const loquesea2 = ({edad}) => edad < MAYOR_DE_EDAD; 

//var loquesea = function(persona){
  //  return persona.edad >= MAYOR_DE_EDAD
//}
// const loquesea2 = function(persona){
  //   return persona.edad < MAYOR_DE_EDAD
 // }

 const loquesea = ({edad}) => edad >= MAYOR_DE_EDAD;

function imprimirMayorDeEdad(persona){
    if (!loquesea2(persona)){
        console.log(persona.nombre + ' es mayor de edad')
    } else {
        console.log(persona.nombre + ' es menor de edad')
    }
}

imprimirProfesiones(sacha)