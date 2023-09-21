// Напишете програма която да пресмята средният разход за месец на семейство за даден период време. За всеки месец разходите са следните:
// •	За ток – всеки месец е различен, ще се чете от конзолата
// •	за вода – 20 лв.
// •	за интернет – 15 лв.
// •	за други – събират се тока, водата и интернета за месеца и към сумата се прибавят 20%.
// За всеки разход трябва да се пресметне колко общо е платено за всички месеци.
// Вход
// Входът се чете от конзолата:
// •	Първи ред – месеците за които се търси средният разход – цяло число в интервала [1...100]
// •	За всеки месец – сметката за ток – реално число в интервала [1.00...1000.00]
// Изход
// Да се отпечата на конзолата 5 реда:
// •	1ви ред: "Electricity: {ток за всички месеци} lv"
// •	2ри ред: "Water: {вода за всички месеци} lv"
// •	3ти ред: "Internet: {интернет за всички месеци} lv"
// •	4ти ред: "Other: {други за всички месеци} lv"
// •	5ти ред: "Average: {средно всички разходи за месец} lv"
// Всички числа трябва да са форматирана до вторият знак след запетаята.

function bills(input) {
    let month = Number(input[0]);
    let index = 1;

    let totalElectrikPrice = 0;
    let totalOtherPrice = 0;
    let waterPrice = 20;
    let internetPrice = 15;

    let totalInternetPrice = internetPrice * month;
    let totalWaterPrice = waterPrice * month;

    for (index = 1; index <= month; index++) {
        electrikPriceForMonth = Number(input[index]);
        totalElectrikPrice += electrikPriceForMonth;

        let otherPriceForMonath = electrikPriceForMonth + waterPrice + internetPrice;
        let otherPricePlus20Proc = otherPriceForMonath + (otherPriceForMonath * 0.2);
        totalOtherPrice += otherPricePlus20Proc;

    }


    let averagePrice = ((totalElectrikPrice + totalWaterPrice + totalInternetPrice + totalOtherPrice) / month);

    console.log(`Electricity: ${totalElectrikPrice.toFixed(2)} lv`);
    console.log(`Water: ${totalWaterPrice.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternetPrice.toFixed(2)} lv`);
    console.log(`Other: ${totalOtherPrice.toFixed(2)} lv`);
    console.log(`Average: ${averagePrice.toFixed(2)} lv`);
}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"])


