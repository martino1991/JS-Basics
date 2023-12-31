// Да се напише програма, която генерира трицифрени PIN кодове, като цифрите на всеки PIN код са в 
// определен интервал. За да бъде валиден един PIN код той трябва да отговаря на следните условия:
//  Първата и третата цифра трябва да бъдат четни
//  Втората цифра трябва да бъде просто число в диапазона [2...7]
// Вход:
// От конзолата се четат 3 реда:
//  Горната граница на първото число - цяло число в диапазона [1...9]
//  Горната граница на второто число - цяло число в диапазона [1...9]
//  Горната граница на третото число - цяло число в диапазона [1...9]
// Изход:
// Да се отпечатат на конзолата всички валидни трицифрени PIN кодове, чиито цифри отговарят на съответните 
// интервали.
function pinCodes(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);


    for (let curN1 = 2; curN1 <= n1; curN1++) {
        if (curN1 % 2 === 0) {
            for (let curN2 = 2; curN2 <= n2; curN2++) {
                if (curN2 === 2 || curN2 === 3 || curN2 === 5) {
                    for (let curN3 = 1; curN3 <= n3; curN3++) {
                        if (curN3 % 2 === 0) {
                            console.log(`${curN1}${curN2}${curN3}`);
                        }
                    }
                }
            }
        }
    }
}
pinCodes(["3", "5", "5"])
