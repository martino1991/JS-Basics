// В кутия имаме неопределен брой топки с различни цветове, които ни носят различен брой точки. Задачата ни е да извадим Х бр. топки, 
// които ще бъдат въведени от конзолата, като се има в предвид, че всеки различен цвят влияе на точките ни по следния начин:
// · Ако топката е "red" точките ни се повишават с 5.
// · Ако топката е "orange" точките ни се повишават с 10.
// · Ако топката е "yellow" точките ни се повишават с 15.
// · Ако топката е "white" точките ни се повишават с 20.
// · Ако топката е "black" точките ни се делят на 2 (целочислено).
// Ако топката е с какъвто и да е цвят, различен от по-горните, точките не се манипулират и програмата продължава да работи.
// Вход:
// 1. От конзолата се чете 1 цяло число N, което е броят на топките в диапазон (0-1000).
// 2. След това се четат N на брой цветове.
// Изход:
// Отпечатват се следните редове:
// "Total points: {всичките събрани точки}"
// "Red balls: {брой червени топки}"
// "Orange balls: {брой оранжеви топки}"
// "Yellow balls: {брой жълти топки}"
// "White balls: {брой бели топки}"
// "Other colors picked: {броят на избраните топки извън зададените цветове}"
// "Divides from black balls: {броят на пътите, в които точките са били разделяни на 2}"
function balls(input) {
    let ballsCount = Number(input[0]);

    let curPoints = 0;
    let points = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherBalls = 0;
    let blackBalls = 0;
    for (let i = 1; i <= ballsCount; i++) {
        switch (input[i]) {
            case "red":
                curPoints = 5;
                points += curPoints;
                redBalls += 1;
                break;
            case "orange":
                curPoints = 10;
                points += curPoints;
                orangeBalls += 1;
                break;
            case "yellow":
                curPoints = 15;
                points += curPoints;
                yellowBalls += 1;
                break;
            case "white":
                curPoints = 20;
                points += curPoints;
                whiteBalls += 1;
                break;
            case "black":
                blackBalls += 1;
                points = points / 2;
                break;
        }
        if (input[i] != "red" && input[i] != "orange" && input[i] != "yellow" && input[i] != "white" && input[i] != "black") {
            otherBalls += 1;
        }

    }

    console.log(`Total points: ${Math.trunc(points)}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);
}
balls(["3","white","black","pink"])