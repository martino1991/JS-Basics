// Доналд иска да си сглоби машина за крипто добив, но преди да си купи видео картите, той трябва да изчисли
// за колко време ще си върне инвестицията. Той трябва да се съобрази с цената на тока, като иска да си закупи
// общо 13 видео карти и 13 преходника, а останалите компоненти за машината е намерил втора употреба на
// обща цена 1000 лева.
// Да се напише програма, която пресмята за колко време ще си върне вложените пари (закръглени до поголямото цяло число) и колко пари ще трябва да инвестира първоначално.
// Вход:
// От конзолата се прочитат 4 числа:
// • На първия ред: цена на една видео карта – цяло число в интервала [1 … 2000]
// • На втория ред: цена на един преходник – цяло число в интервала [1 … 50]
// • На третия ред: цена на консумирания ток от карта за ден – реално число в интервала [0.01 ... 10.00]
// • На четвъртия ред: печалба от една карта за един ден – реално число в интервала [1.00 ... 100.00]
// Изход:
// Да се отпечатат два реда на конзолата:
// • Общо похарчените пари по машината
// • Времето за възвръщане на инвестицията в дни (закръглени до по-голямото цяло число)

function mining(input) {
    let priceOneVideoCard = Number(input[0]);
    let priceOneTransition = Number(input[1]);
    let electirkPriceVideoForDay = Number(input[2]);
    let winFromOneVideoCard = Number(input[3]);
    let other = 1000;

    let totalPriceVideoCard = 13 * priceOneVideoCard;
    let totalPriceTransition = 13 * priceOneTransition;
    let expense = totalPriceTransition + totalPriceVideoCard + other;
    let winMoneyForDay = winFromOneVideoCard - electirkPriceVideoForDay;
    let totalWinMoneyForDay = winMoneyForDay * 13;

    let winAfterDay = Math.ceil(expense / totalWinMoneyForDay);

    console.log(expense);
    console.log(winAfterDay);

}
mining (["800",
"10",
"0.32",
"6.4"])