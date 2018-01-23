// importando os modulos
import {Spacecraft,ContainerShip,MillenniumFalcon} from './classes-e-interfaces'


// usando os modulos
//instânciando um objeto da classe
let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcom = new MillenniumFalcon()
falcom.jumpIntoHyperspace()

// usando a interface
let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2
console.log(`Is falcom good for the job? ${goodForTheJob(falcom) ? 'yes': 'no'}`)
