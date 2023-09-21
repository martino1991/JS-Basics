// Напишете функция, която получава аргумент число от 1 до 10 и принтира таблицата за умножение в конзолата.


function multiPlication(inputAera) {

    let inputNumber = Number(inputAera[0]);

    for (i = 1; i <= 10; i++) {
        console.log(`${i} * ${inputAera} = ${i * inputNumber}`);
    }
}
multiPlication(["5"]);