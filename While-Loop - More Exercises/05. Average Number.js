// Напишете програма, която прочита едно число n, след това прочита n на брой цели числа и принтира средно аритметичното на тяхната сума число, 
// форматирано до втората цифра след десетични знак.

function averageNumber(input) {

    let index = 0;
    let n = Number(input[index++]);
    let sum = 0;
 
    while (index <= n) {
        let currentNum = Number(input[index]);
        sum += currentNum;
        index++;
    }
 
    let avgSum = sum / n;
    console.log(avgSum.toFixed(2));
}
averageNumber(["2", "6" , "4"]);