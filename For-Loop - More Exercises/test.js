// Отговаряте за логистиката на различни товари. В зависимост от теглото на товара е нужно различно превозно средство. Цената на тон, 
// за която се превозва товара е различна за всяко превозно средство:
// •	До 3 тона – микробус (200 лева на тон)
// •	От 4 до 11 тона – камион (175 лева на тон)
// •	12 и повече тона – влак (120 лева на тон)
// Вашата задача е да изчислите средната цена на тон превозен товар, както и процента на тоновете  превозвани с всяко превозно средство, 
// спрямо общото тегло(в тонове) на всички товари.
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

function solve(input) {
    let countLoads = Number(input[0]);
    let index = 1;

    let loadUntil3Ton = 0;
    let countLoad3Ton = 0;

    let loadUntil11Ton = 0;
    let countLoad11Ton = 0;

    let loadUp12Ton = 0;
    let countUp12Ton = 0;

    for (let i = 1; i <= countLoads; i++) {
        let curLoad = Number(input[index]);
        index++

        if (curLoad <= 3) {
            loadUntil3Ton += (200 * curLoad);
            countLoad3Ton += curLoad;
        } else if (curLoad <= 11) {
            loadUntil11Ton += (175 * curLoad);
            countLoad11Ton += curLoad;
        } else if (curLoad >= 12) {
            loadUp12Ton += (120 * curLoad);
            countUp12Ton += curLoad;
        }

    }
    let totalLoadsTon = countLoad11Ton + countLoad3Ton + countUp12Ton;
    let averagePrice = (loadUntil11Ton + loadUntil3Ton + loadUp12Ton) / totalLoadsTon;


    console.log(averagePrice.toFixed(2));
    console.log(`${((countLoad3Ton / totalLoadsTon) * 100).toFixed(2)}%`);
    console.log(`${((countLoad11Ton / totalLoadsTon) * 100).toFixed(2)}%`);
    console.log(`${((countUp12Ton / totalLoadsTon) * 100).toFixed(2)}%`);

}

solve(["4", "1", "5", "16", "3"])