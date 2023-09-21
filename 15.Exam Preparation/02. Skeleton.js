// Българският състезател по скелетон Марин Бангиев се бори за олимпийска квота. Вие имате честта да напишете програмата, която ще изчисли дали той печели квота.
// Вашата програма получава контролата в минути, която трябва да бъде достигната или подобрена, 
// за да може Марин да вземе квота. Също така програмата ще получи разстоянието на улея в метри, и времето в секунди, за което той изминава 100 метра.
// Трябва да се има предвид, че поради наклона на улея, на всеки 120 метра неговото време намаля с 2.5 секунди.
// Вход
// От конзолата се четат 4 реда:
// 1. Минути на контролата – цяло число в интервала [0…59]
// 2. Секунди на контролата – цяло число в интервала [0…59]
// 3. Дължината на улея в метри – реално число в интервала [0.00…50000]
// 4. Секунди за изминаване на 100 метра – цяло число в интервала [0…1000]
// Изход
// На конзолата трябва да се отпечата на един или два реда:
// · Ако времето на Марин е по-малко или равно на контролата:
// o "Marin Bangiev won an Olympic quota!"
// o "His time is {времето на Марин в секунди}."
// · Ако времето на Марин е повече от това на контролата:
// o "No, Marin failed! He was {недостигащи секунди} second slower."
// Резултатът трябва да е форматиран до третия знак след десетичния знак.

function skeleton(input) {
    let kontrolMin = Number(input[0]);
    let kontrolSec = Number(input[1]);
    let runwayLength = Number(input[2]);
    let sekFor100Meters = Number(input[3]);

    let kontrolMinToSec = kontrolMin * 60;
    let fullKontrolTimeInSec = kontrolMinToSec + kontrolSec;
    let slowdownTime = (runwayLength / 120) * 2.5;
    let totalTime = ((runwayLength / 100) * sekFor100Meters) - slowdownTime;

    if (totalTime <= fullKontrolTimeInSec) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${(totalTime).toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(totalTime - fullKontrolTimeInSec).toFixed(3)} second slower.`);
    }
}
skeleton(["2",

"12",

"1200",

"10"])