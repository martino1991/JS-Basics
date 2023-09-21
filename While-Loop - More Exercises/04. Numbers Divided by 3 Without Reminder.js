// Напишете програма, която печата всички числа в интервала от 1 до 100, който се делят на 3 без остатък, по едно на ред.

function number(input) {
    let index = 1;

    while (index <= 100) {
        let num = Number(index);
        if (num % 3 === 0) {
            console.log(num);
        }
        index++;
    }
}
number([""]);