// declarando um classe
var Spacecraft = /** @class */ (function () {
    // usando a sintaxe reduzida para criar um atributo para a classe
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    // declarando um metódo
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
//instânciando um objeto da classe
var ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
