// declarando um classe
class Spacecraft{

  // usando a sintaxe reduzida para criar um atributo para a classe
  constructor(public propulsor: string){}

  // declarando um metódo
  jumpIntoHyperspace(){
    console.log(`Entering hyperspace with ${this.propulsor}`)
  }
}

//instânciando um objeto da classe
let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()



// usando herança e interfaces
class MillenniumFalcon extends Spacecraft implements ContainerShip{

    cargoContainers: number

  constructor(){
    super('hyperdrive')
    this.cargoContainers = 2
  }


  jumpIntoHyperspace(){
    if(Math.random() >= 0.5){
      super.jumpIntoHyperspace()
    }else{
      console.log('Failed to jump into hyperspace')
    }
  }
}

let falcom = new MillenniumFalcon()
falcom.jumpIntoHyperspace()

// declarando interface
interface ContainerShip{
  cargoContainers: number
}


// usando a interface
let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2
console.log(`Is falcom good for the job? ${goodForTheJob(falcom) ? 'yes': 'no'}`)
