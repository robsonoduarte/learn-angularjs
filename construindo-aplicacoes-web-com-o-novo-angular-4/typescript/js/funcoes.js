// sintaxe padrao de uma function
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon ? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
// sintaxe arrow function
var call = function (name) { return console.log("Do you copy, " + name); };
call('R2');
// parametros padroes
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5,1) = " + inc(5, 1));
console.log("inc(5) = " + inc(5));
