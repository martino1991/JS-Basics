// Ани намира кученце, за което ще се грижи, докато се намери някой да го осинови. То изяжда дневно определено количество храна. 
// Да се напише програма, която проверява дали количеството храна, което е закупено за кученцето, ще е достатъчно докато кученцето бъде осиновено.
// Вход:
// От конзолата се прочитат:
// • Закупеното количество храна за кученцето в килограми – цяло число в интервала [1 …100]
// • На всеки следващ ред до получаване на команда Adopted ще получавате колко грама изяжда кученцето на всяко хранене - цяло число в интервала [10 …1000]
// Изход:
// На конзолата се отпечатва 1 ред:
// · Ако количеството храна е достатъчно да се отпечата:
// "Food is enough! Leftovers: {останала храна} grams."
// · Ако количеството храна не е достатъчно да се отпечата:
// "Food is not enough. You need {нужно количество храна} grams more."

function puppy(input) {
    let foodPuppyKg = Number(input[0]);
    let command = input[1];
    let index = 2;

    let foodPuppyKgToGr = foodPuppyKg * 1000;
    let foodEat = 0;

    while (command !== "Adopted") {
        let curPortion = Number(command);
        foodEat += curPortion;

        command = input[index];
        index++;
    }

    if (foodEat <= foodPuppyKgToGr) {
        console.log(`Food is enough! Leftovers: ${foodPuppyKgToGr - foodEat} grams.`);
    } else {
        console.log(`Food is not enough. You need ${foodEat - foodPuppyKgToGr} grams more.`);
    }

}
puppy(["4","130","345","400","180","230","120","Adopted"]);