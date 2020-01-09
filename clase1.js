var sacha = {
    apellido: 'Lifszyc',
    nombre: 'Sacga',
    edad: 23
}

var dario = {
    nombre: 'Dario',
    apellido: 'Menendez',
    edad: 27
}

var oscar = {
    nombre: 'oscar',
    apellido: 'de La Rosa',
    edad: 25

}

function imprimirNombreEnMayusculas(persona){
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

function imprimirNombreyEdad(persona){
    var {nombre} = persona
    var {edad} = persona 
    console.log('Hola soy ' + nombre + ' y tengo ' + edad + ' años')
}

function cumpleaños(persona){
    persona.edad += 1
}

function nuevapersona(persona){
    return{
        ...persona,
        nombre: 'Oscar Eduardo',
        edad: persona.edad + 2,
        profesion: 'programador'


    }

}

function duplicate (persona1, persona2){
 persona2.edad = 2 * persona1.edad
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas(oscar)
imprimirNombreEnMayusculas({nombre: 'Juanito'})

imprimirNombreyEdad(oscar)

duplicate(oscar, dario)



