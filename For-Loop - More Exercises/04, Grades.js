// Напишете програма, която да пресмята статистика на оценки от изпит. В началото програмата получава броят на студентите явили се на изпита и за всеки студент неговата оценка. 
// На края програмата трябва да изпечата процента на студенти с оценка между 2.00 и 2.99, между 3.00 и 3.99, между 4.00 и 4.99, 5.00 или повече. 
// Също така и средният успех на изпита.
// Вход
// От конзолата се четат поредица от числа, всяко на отделен ред:
// •	На първия ред – броя на студентите явили се на изпит – цяло число в интервала [1...1000]
// •	За всеки един студент на отделен ред – оценката от изпита – реално число в интервала [2.00...6.00]
// Изход
// Да се отпечатат на конзолата 5 реда, които съдържат следната информация:
// Ред 1 -	"Top students: {процент студенти с успех 5.00 или повече}%"
// Ред 2 -	"Between 4.00 and 4.99: {между 4.00 и 4.99 включително}%"
// Ред 3 -	"Between 3.00 and 3.99: {между 3.00 и 3.99 включително}%"
// Ред 4 -	"Fail: {по-малко от 3.00}%"
// Ред 5 -	"Average: {среден успех}"
// Всички числа трябва да са форматирани до вторият знак след десетичната запетая.

function grades(input) {
    let countSteudent = Number(input[0]);
    let index = 1;

    let topGrade = 0;         // ot 5.00 na gore
    let veryGoodGrade = 0;    // mejdy 4.00 i 4.99
    let goodGrade = 0;        // mejdy 3.00 i 3.99
    let fallGrade = 0;        // po malko ot 3.00

    let totalGrades = 0;

    for (let curStudent = 1; curStudent <= countSteudent; curStudent++) {
        let curGrade = Number(input[index]);
        index++;

        if (curGrade >= 5.00) {
            topGrade += 1;
            totalGrades += curGrade;
        } else if (curGrade >= 4.00) {
            veryGoodGrade += 1;
            totalGrades += curGrade;
        } else if (curGrade >= 3.00) {
            goodGrade += 1;
            totalGrades += curGrade;
        } else if (curGrade < 3.00) {
            fallGrade += 1;
            totalGrades += curGrade;
        }

    }
    let AverageGrades = totalGrades / countSteudent;

    console.log(`Top students: ${((topGrade / countSteudent) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((veryGoodGrade / countSteudent) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((goodGrade / countSteudent) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((fallGrade / countSteudent) * 100).toFixed(2)}%`);
    console.log(`Average: ${AverageGrades.toFixed(2)}`);
}
grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);