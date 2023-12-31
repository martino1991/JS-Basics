// Дядо Коледа започва да обикаля от град на град за да носи подаръци на всички послушни деца. Той ви моли
// да напишете програма, която да принтира на конзолата всички адресни номера от М до N, които се делят
// едновременно на 2 и на 3 без остатък, тъй като Дядо Коледа, знае че там живеят само послушни деца. От
// конзолата ще се чете още един номер на адрес S. Ако някой от адресните номера от M до N, които се делят
// на 2 и 3, е равен на адреса S, този адрес не трябва да се принтира и програмата трябва да приключи. В
// противен случай се принтират всички адресни номера до N, които отговарят на условието.
// Вход:
// От конзолата се четат точно 3 числа, всяко на отделен ред:
//  N – цяло число – 0 <= N < M
//  M – цяло число – N < M <= 10000
//  S – цяло числo – N <= S <= M
// Изход:
// На конзолата се принтират на един ред, всички адресни номера отговарящи на условията, разделени с
// интервал

function cristmas(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);

    let adresNumber = "";


    for (let index = m; index >= n; index--) {
        let curNumber = Number(index);

        if (curNumber % 2 === 0 && curNumber % 3 === 0) {
            if (curNumber === s) {
                break;
            }
            adresNumber += `${curNumber} `;
        }
    }

    console.log(adresNumber);
}

cristmas(["1", "36", "12"])
