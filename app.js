const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 118.9;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0064;
    return valueInPound;
}

const suma = (a,b) => {
    return a + b
}
console.log(suma(7,3))

module.exports = { suma, fromEuroToDollar, fromDollarToYen, fromYenToPound };