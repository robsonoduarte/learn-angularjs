var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// usando herança e interfaces
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 2;
        return _this;
    }
    MillenniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MillenniumFalcon;
}(Spacecraft));
var falcom = new MillenniumFalcon();
falcom.jumpIntoHyperspace();
// usando a interface
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcom good for the job? " + (goodForTheJob(falcom) ? 'yes' : 'no'));
