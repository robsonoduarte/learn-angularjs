
// sintaxe padrao de uma function
let isEnoughToBeatMF = function(parsecs: number): boolean{
  return parsecs < 12
}
let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon ? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'}`)

// sintaxe arrow function
let call = ( name: string) => console.log(`Do you copy, ${name}`)
call('R2')

// parametros padroes
function inc(speed: number, inc: number = 1) : number {
  return speed + inc
}

console.log(`inc(5,1) = ${inc(5,1)}`)
console.log(`inc(5) = ${inc(5)}`)
