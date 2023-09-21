
// Отговаряте за логистиката на различни товари. В зависимост от теглото на товара е нужно различно превозно средство. Цената на тон, за която се превозва товара е различна за всяко превозно средство:
// •	До 3 тона – микробус (200 лева на тон)
// •	От 4 до 11 тона – камион (175 лева на тон)
// •	12 и повече тона – влак (120 лева на тон)
// Вашата задача е да изчислите средната цена на тон превозен товар, както и процента на тоновете  превозвани с всяко превозно средство, спрямо общото тегло(в тонове) на всички товари.
// Вход
// От конзолата се четат поредица от числа, всяко на отделен ред:
// •	На първия ред – броя на товарите за превоз – цяло число в интервала [1...1000]
// •	За всеки един товар на отделен ред – тонажа на товара – цяло число в интервала [1...1000]
// Изход
// Да се отпечатат на конзолата 4 реда, както следва:
// •	Първи ред – средната цена на тон превозен товар (закръглена до втория знак след дес. запетая);
// •	Втори ред – процентът тона превозвани с микробус (процент между 0.00% и 100.00%);
// •	Трети ред – процентът  тона превозвани с камион (процент между 0.00% и 100.00%);
// •	Четвърти ред – процентът тона превозвани с влак (процент между 0.00% и 100.00%).

function logistic(input) {
    let loadCount = Number(input[0]);
    let curLoad = 1;

    let busLoad = 0;
    let busPriceForTon = 200;
    let truckLoad = 0;
    let truckPriceForTon = 175;
    let trainLoad = 0;
    let trainPriceForTon = 120;

    let totalLoad = 0;

    for (curLoad = 1; curLoad <= loadCount; curLoad++) {
        if (input[curLoad] <= 3) {
            busLoad += Number(input[curLoad]);
        } else if (input[curLoad] <= 11) {
            truckLoad += Number(input[curLoad]);
        } else {
            trainLoad += Number(input[curLoad]);
        }
    }
    totalLoad = busLoad + truckLoad + trainLoad;
    let averagePrice = ((busPriceForTon * busLoad) + (truckPriceForTon * truckLoad) + (trainPriceForTon * trainLoad)) / totalLoad;

    console.log(averagePrice.toFixed(2));
    console.log(`${((busLoad / totalLoad) * 100).toFixed(2)}%`);
    console.log(`${((truckLoad / totalLoad) * 100).toFixed(2)}%`);
    console.log(`${((trainLoad / totalLoad) * 100).toFixed(2)}%`);
}
logistic(["4", "1", "5", "16", "3"])