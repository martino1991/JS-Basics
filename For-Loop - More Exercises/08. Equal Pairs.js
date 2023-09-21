// Дадени са 2*n-на брой числа. Първото и второто формират двойка, третото и четвъртото също и т.н. Всяка двойка има стойност – сумата от съставящите я числа. 
// Напишете програма, която проверява дали всички двойки имат еднаква стойност или печата максималната разлика между две последователни двойки. 
// Ако всички двойки имат еднаква стойност, отпечатайте "Yes, value={Value}" + стойността. В противен случай отпечатайте "No, maxdiff={Difference}" + максималната разлика. 

function solve(input) {
    let pairsCount = Number(input[0]);
    let num1 = Number(input[1]);
    let num2 = Number(input[2]);
    let commonNumber = num1 + num2;

    let index = 1;

    let lastNum1 = 0;
    let lastNum2 = 0;
    
    let diffNumber = 0;

    if (pairsCount == 1) {
        console.log(`Yes, value=${commonNumber}`);
        return;
    }

    for (let curPairs = 1; curPairs <= pairsCount; curPairs++) {
        let curNumber1 = Number(input[index]);
        let curNumber2 = Number(input[index + 1]);
        index += 2;

        let totalNumber = 0;
        totalNumber = curNumber1 + curNumber2;

        if (curPairs == pairsCount - 1) {
            if (totalNumber !== commonNumber) {
                lastNum1 = totalNumber
            } else {
                lastNum1 = commonNumber
            }
        } else if (curPairs == pairsCount) {
            lastNum2 = totalNumber
        }
    }

    diffNumber = Math.abs(lastNum1 - lastNum2);

    if (diffNumber !== 0) {
        console.log(`No, maxdiff=${diffNumber}`);
    } else {
        console.log(`Yes, value=${commonNumber}`);
    }
}

solve(["2", "-1", "0", "0", "-1"])