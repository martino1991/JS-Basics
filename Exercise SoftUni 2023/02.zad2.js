// По време на мач Пепи решава да си купи бира и чипс от магазинчето в стадиона. Вашата задача е да
// напишете програма, с която ще разберете дали има необходимите пари и дали ще успее да си закупи
// съответните неща. Цената на една бира е 1.20 лв., а цената на един пакет чипс е равна на 45% от общата
// стойност на закупените бири. Общата цена на чипса да се закръгли до по-голямо число.
// Вход
// От конзолата се четат 4 реда:
// • На първия ред - името на футболният фен – текст
// • На втория ред - предвиденият бюджет – реално число в диапазона [1.0… 100 000.0]
// • На третия ред - брой бутилки бира – цяло число в диапазона [1… 100 000]
// • На четвърти ред - брой пакети чипс – цяло число в диапазона [1… 100 000]
// Изход
// Да се отпечата един ред:
// • Ако бюджетът е достатъчен за закупуването на продуктите:
// "{име} bought a snack and has {останали пари} leva left."
// • Ако бюджетът НЕ е достатъчен:
// "{име} needs {нужни пари} more leva!"
// Резултатът да се форматира до втория знак след десетичната запетая

function fen(input) {
    let fenName = input[0];
    let budget = Number(input[1]);
    let countBeer = Number(input[2]);
    let countChips = Number(input[3]);

    let beerPrice = 1.20;
    let totalBeerPrice = countBeer * beerPrice;


    let chipsPrice = (totalBeerPrice * 45) / 100;
    let totalChipsPrice = Math.ceil(countChips * chipsPrice);

    let totalForAll = totalBeerPrice + totalChipsPrice;

    if (totalForAll <= budget) {
        console.log(`${fenName} bought a snack and has ${(budget - totalForAll).toFixed(2)} leva left.`);
    } else {
        console.log(`${fenName} needs ${(totalForAll - budget).toFixed(2)} more leva!`);
    }
}
fen(["George",
"10",
"2",
"3"])