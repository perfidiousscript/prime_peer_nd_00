var randomNum = require('./randomNum');
var toDollar = require('./toDollar');

function money(){
    return toDollar(randomNum(100,100000));
}

function string(){
    return "Account Balance: \n";
}

module.exports.money = money;
module.exports.string = string;