const sum = (a,b) => {
    return a + b
}
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
//fromEuroToDollar
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // returnamos el valor
    return valueInDollar;
}
//fromDollarToYen
const fromDollarToYen = function (valueInDollar){
    let valueInYen = 4.2 * oneEuroIs.JPY;
    return valueInYen;
}
//fromYenToPound 
const fromYenToPound = function (valueInYen){
    let valueInPound = 537.18 * oneEuroIs.GBP;
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }