// Катерачи от цяла България се събират на групи и набелязват следващите върхове за изкачване. Според размера на групата, катерачите ще изкачват различни върхове.
// •	Група до 5 човека – изкачват Мусала
// •	Група от 6 до 12 човека – изкачват Монблан
// •	Група от 13 до 25 човека – изкачват Килиманджаро
// •	Група от 26 до 40 човека –  изкачват К2
// •	Група от 41 или повече човека – изкачват Еверест
// Да се напише програма, която изчислява процента на катерачите изкачващи всеки връх.
// Вход
// От конзолата се четат поредица от числа, всяко на отделен ред:
// •	На първия ред – броя на групите от катерачи – цяло число в интервала [1...1000]
// •	За всяка една група на отделен ред – броя на хората в групата – цяло число в интервала [1...1000]
// Изход
// Да се отпечатат на конзолата 5 реда, всеки от които съдържа процент между 0.00% и 100.00% с точност до втората цифра след десетичната запетая.
// •	Първи ред - процентът изкачващи Мусала
// •	Втори ред – процентът изкачващи Монблан
// •	Трети ред – процентът изкачващи Килиманджаро
// •	Четвърти ред – процентът изкачващи К2
// •	Пети ред – процентът изкачващи Еверест

function solve(input) {
    let grupeMusala = 0;
    let grupeMonblan = 0;
    let grupeKilimiandjaro = 0;
    let grupeK2 = 0;
    let grupeEverest = 0;
    let totalCountClimbers = 0

    let grupeCount = Number(input[0]);
    let index = 1;

    for (let curGrupe = 1; curGrupe <= grupeCount; curGrupe++) {
        let climbersCount = Number(input[index++]);

        if (climbersCount <= 5) {
            grupeMusala += climbersCount;
            totalCountClimbers += climbersCount;
        } else if (climbersCount <= 12) {
            grupeMonblan += climbersCount;
            totalCountClimbers += climbersCount;
        } else if (climbersCount <= 25) {
            grupeKilimiandjaro += climbersCount;
            totalCountClimbers += climbersCount;
        } else if (climbersCount <= 40) {
            grupeK2 += climbersCount;
            totalCountClimbers += climbersCount;
        } else {
            grupeEverest += climbersCount;
            totalCountClimbers += climbersCount;
        }
    }
    console.log(`${((grupeMusala / totalCountClimbers) * 100).toFixed(2)}%`);
    console.log(`${((grupeMonblan / totalCountClimbers) * 100).toFixed(2)}%`);
    console.log(`${((grupeKilimiandjaro / totalCountClimbers) * 100).toFixed(2)}%`);
    console.log(`${((grupeK2 / totalCountClimbers) * 100).toFixed(2)}%`);
    console.log(`${((grupeEverest / totalCountClimbers) * 100).toFixed(2)}%`);
}
solve(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])

