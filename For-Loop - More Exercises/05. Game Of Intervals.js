// Напишете програма, която да пресмята резултата от игра. Първо получавате число, което показва колко хода ще продължи играта. 
// После за всеки ход на играта ще получавате по едно ново число. Според интервала в който попада числото се прибавят точки. Ако числото е отрицателно или по-голямо 50,
// тогава то е невалидно. В началото на играта резултата е 0 и на всеки ход се прибавят точки по следният начин: 
// •	От 0 до 9  20 % от числото
// •	От 10 до 19  30 % от числото
// •	От 20 до 29  40 % от числото
// •	От 30 до 39  50 точки
// •	От 40 до 50  100 точки
// •	Невалидно число  резултата се дели на 2
 // Освен резултата програмата трябва да изкарва статистика за проценти числа в дадените интервали.
// Вход
// Входът се чете от конзолата:
// •	Първи ред - колко хода ще има по време на играта – цяло число в интервала [1...100]
// •	За всеки ход – числата, които се проверяват в кой интервал са – цели числа в интервала [-100...100]
// Изход
// Да се отпечата на конзолата 7 реда:
// •	1ви ред: "{Краен резултат}"
// •	2ри ред: "From 0 to 9: {процент в интервала}%"
// •	3ти ред: "From 10 to 19: {процент в интервала}%"
// •	4ти ред: "From 20 to 29: {процент в интервала}%"
// •	5ти ред: "From 30 to 39: {процент в интервала}%"
// •	6ти ред: "From 40 to 50: {процент в интервала}%"
// •	7ми ред: "Invalid numbers: {процент в интервала}%"
// Всички числа трябва да са форматирана до вторият знак след запетаята.

function gameOfIntervals(input) {
    let numberOfMoves = Number(input[0]);
    let index = 1;

    let num0To9 = 0;
    let num10To19 = 0;
    let num20To29 = 0;
    let num30To39 = 0;
    let num40To50 = 0;
    let invalidNumbers = 0;

    let totalSum = 0;

    for (let curMove = 1; curMove <= numberOfMoves; curMove++) {
        let curNumber = Number(input[index]);
        index++;

        if (curNumber >= 0 && curNumber <= 9) {
            num0To9 += 1;
            totalSum += curNumber * 0.2;
        } else if (curNumber >= 10 && curNumber <= 19) {
            num10To19 += 1;
            totalSum += curNumber * 0.3;
        } else if (curNumber >= 20 && curNumber <= 29) {
            num20To29 += 1;
            totalSum += curNumber * 0.4;
        } else if (curNumber >= 30 && curNumber <= 39) {
            num30To39 += 1;
            totalSum += 50;
        } else if (curNumber >= 40 && curNumber <= 50) {
            num40To50 += 1;
            totalSum += 100;
        } else {
            invalidNumbers += 1;
            totalSum = totalSum / 2;
        }
    }

    console.log(totalSum.toFixed(2));
    console.log(`From 0 to 9: ${((num0To9 / numberOfMoves) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((num10To19 / numberOfMoves) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((num20To29 / numberOfMoves) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((num30To39 / numberOfMoves) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((num40To50 / numberOfMoves) * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((invalidNumbers / numberOfMoves) * 100).toFixed(2)}%`);
}
gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);
