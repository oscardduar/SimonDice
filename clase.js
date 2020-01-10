
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(){
        console.log(`Hola, me llammo ${this.nombre} ${this.apellido}`)
    }
    soyalto(){
        return this.altura > 1
    }

}

class Programador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y soy desarrollador`)
    }
}






var oscar = new Persona('Oscar', 'Eduardo', 1.72)
var yolanda = new Persona('Yolanda', 'deLaRosa',0.4)
var oscar2 = new Programador('Eduardo', 'de La Rosa', 1.75)


