var signo = prompt('¿Cuál es tu signo?')

console.log(signo)

switch(signo){
    case 'acuario':
        console.log('Usted es signo acuario')
        break
    case 'leo':
        console.log('Usted es signo leo')
        break
    default:
        console.log('No es un signo')
        break
}