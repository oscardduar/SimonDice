function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura= altura
}

function Transporte(tipo, color, precio){
    this.tipo = tipo
    this.color = color
    this.precio = precio
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llammo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyalto = function() {
    if (this.altura > 1){
        console.log(`${this.nombre} es alt@`)
    }
}

Transporte.prototype.soyCaro = function() {
    return this.precio > 100000

} 



var oscar = new Persona('Oscar', 'Eduardo', 1.72)
var yolanda = new Persona('Yolanda', 'deLaRosa',0.4)
var carro = new Transporte('carro','rojo', 37000 )
var camion = new Transporte('camion', 'negro', 355000)


oscar.soyalto()
yolanda.soyalto()
