// declarando um classe
class Spacecraft{
  // usando a sintaxe reduzida para criar um atributo para a classe
  constructor(public propulsor: string){}
  // declarando um metódo
  jumpIntoHyperspace(){
    console.log(`Entering hyperspace with ${this.propulsor}`)
  }
}

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

// declarando interface
interface ContainerShip{
  cargoContainers: number
}



// exportando como modulos
export{Spacecraft,ContainerShip,MillenniumFalcon}
