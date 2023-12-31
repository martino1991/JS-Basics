// Провокирани от сватбата си, Михаела и Иван решават да предоставят нова услуга на клиенти на ресторанта си, а именно вечеря за запознанства - "Предизвикай Сватбата". 
// Напишете програма, която отпечатва всички възможни срещи на клиентите на ресторанта. 
// При настаняване всеки мъж и всяка жена получават талончета с поредни номера стартирайки от 1. 
// Ако бъдат заети всички маси, програмата трябва да приключи. Всяка маса има две места.
// Вход
// От конзолата се четат точно 3 числа, всяко на отделен ред:
// •	Броя клиенти мъже - цяло число в интервала [1...100]
// •	Броя клиенти жени - цяло число в интервала [1...100]
// •	Максималният брой маси - цяло число в интервала [1...100]
// Изход
// На конзолата се принтират на един ред, разделени с интервал всички срещи в следният формат:
// •	({№ клиент} <-> {№ клиент}) ({№ клиент} <-> {№ клиент}) ...
// Примерен вход и изход

function solve(input) {
    let manCount = Number(input[0]);
    let womanCount = Number(input[1]);
    let tableCount = Number(input[2]);

    let combinationsCount = 0;
    let combinations = "";

    for (let curMan = 1; curMan <= manCount; curMan++) {
        for (let curWoman = 1; curWoman <= womanCount; curWoman++) {
            combinationsCount += 1;

            if (combinationsCount <= tableCount) {
                combinations += `(${curMan} <-> ${curWoman}) `
            }
        }
    }

    console.log(combinations);
}
solve(["2", "2", "3"])