// Лили вече е на N години. За всеки свой рожден ден тя получава подарък.
// · За нечетните рождени дни (1, 3, 5...n) получава играчки.
// · За четните рождени дни (2, 4, 6...n) получава пари.
// За втория рожден ден получава 10.00 лв, като сумата се увеличава с 10.00 лв., за всеки следващ четен рожден ден (2 -> 10, 4 -> 20, 6 -> 30...и т.н.). 
// През годините Лили тайно е спестявала парите. Братът на Лили, в годините, които тя получава пари, взима по 1.00 лев от тях. 
// Лили продала играчките получени през годините, всяка за P лева и добавила сумата към спестените пари. 
// С парите искала да си купи пералня за X лева. Напишете програма, която да пресмята, колко пари е събрала и дали ѝ стигат да си купи пералня.
// Вход:
// Програмата прочита 3 числа, въведени от потребителя, на отделни редове:
// · Възрастта на Лили - цяло число в интервала [1...77]
// · Цената на пералнята - число в интервала [1.00...10 000.00]
// · Единична цена на играчка - цяло число в интервала [0...40]
// Изход:
// Да се отпечата на конзолата един ред:
// · Ако парите на Лили са достатъчни:
// o "Yes! {N}" - където N е остатъка пари след покупката
// · Ако парите не са достатъчни:
// o "No! {М}" - където M е сумата, която не достига
// Числата N и M трябва да за форматирани до вторият знак след десетичната запетая.

function lilyBirthDay(input) {

    let lilyAge = Number(input[0]);
    let maschinPrice = Number(input[1]);
    let onePupyPrice = Number(input[2]);

   
    let pupyCount = 0;
    let totalPupyPrice = 0;
    let totalMoney = 0;
    let birthDayEven = 0;

    for (let birthDay = 1; birthDay <= lilyAge; birthDay++) {
        if (birthDay % 2 === 0) {
            birthDayEven += 1;
            totalMoney += (10 * birthDayEven) - 1
        } else {
            pupyCount += 1;
        }
    }

    totalPupyPrice = onePupyPrice * pupyCount;
    totalMoney += totalPupyPrice;

    if (totalMoney >= maschinPrice) {
        console.log(`Yes! ${(totalMoney - maschinPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${maschinPrice - totalMoney}`);
    }
}

lilyBirthDay(["10","170.00","6"]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function cleverLily(inputArray){

    let lilyAge = Number(inputArray[0]);
    let washingMachinePrice = Number(inputArray[1]);
    let toyPrice = Number(inputArray[2]);

    let money = 0;

    for( let i = 1 ; i <= lilyAge ; i+= 1) {
        let isEven = i % 2 === 0 ;

        if(isEven){
            money += ((i / 2) * 10) - 1;
        } else {
            money += toyPrice;
        }
    }
    if(money >= washingMachinePrice){
        console.log(`Yes! ${(money - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - money).toFixed(2)}`);
    }


}