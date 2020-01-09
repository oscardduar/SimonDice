
const CANT_DIAS = 1

var temporizador = {
  dias: 0,
  horas: 0,  
  minutos: 0,
  segundos:  0
}

for(var i= CANT_DIAS -1; i >= 0; i--){
    temporizador.dias = i

    for(var i2= 23; i2 >= 0; i2--){
        temporizador.horas = i2
        for(var i3= 59; i3 >= 0; i3--){
            temporizador.minutos = i3
            for(var i4= 59; i4 >= 0; i4--){
                
                temporizador.segundos = i4
                console.log(`Días: ${temporizador.dias} horas: ${temporizador.horas} minutos: ${temporizador.minutos} segundos: ${temporizador.segundos}`)
            }
            
            
        }
      
      
    }
  
   
}







