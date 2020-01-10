
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        console.log(`Hola, me llammo ${this.nombre} ${this.apellido}`)
        if (fn){
            fn(this.nombre, this.apellido)
        }
    }
    soyalto(){
        return this.altura > 1
    }

}

class Programador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        console.log(`Hola, mi nombre es ${this.nombre} y soy desarrollador`)
        if (fn){
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido} `)
    if (esDev) {
        console.log('no sabía que eres desarrollador')
    }
}




var oscar = new Persona('Oscar', 'Eduardo', 1.72)
var yolanda = new Persona('Yolanda', 'deLaRosa',0.4)
var oscar2 = new Programador('Eduardo', 'de La Rosa', 1.75)

oscar.saludar()
yolanda.saludar(responderSaludo)
oscar2.saludar(responderSaludo)
