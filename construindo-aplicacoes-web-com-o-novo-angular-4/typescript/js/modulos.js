"use strict";
exports.__esModule = true;
// importando os modulos
var classes_e_interfaces_1 = require("./classes-e-interfaces");
// usando os modulos
//instânciando um objeto da classe
var ship = new classes_e_interfaces_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcom = new classes_e_interfaces_1.MillenniumFalcon();
falcom.jumpIntoHyperspace();
// usando a interface
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcom good for the job? " + (goodForTheJob(falcom) ? 'yes' : 'no'));
