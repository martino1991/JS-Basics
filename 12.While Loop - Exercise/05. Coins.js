// Производителите на вендинг машини искали да направят машините си да връщат възможно най-малко монети ресто. Напишете функция, 
// която приема сума - рестото, което трябва да се върне и изчислява с колко най-малко монети може да стане това. Монетите може да 
// са от 2 лева, 1 лев, 50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 2 стотинки или 1 стотинка 

function solve(input) {

    let change = Number(input[0]);
    let stotinki = Math.trunc(change * 100);

    let countCoins = 0

    while (stotinki > 0) {
        if (stotinki >= 200) {
            stotinki -= 200;
            countCoins += 1;
        } else if (stotinki >= 100) {
            stotinki -= 100;
            countCoins += 1;
        } else if (stotinki >= 50) {
            stotinki -= 50;
            countCoins += 1;
        } else if (stotinki >= 20) {
            stotinki -= 20;
            countCoins += 1;
        } else if (stotinki >= 10) {
            stotinki -= 10;
            countCoins += 1;
        } else if (stotinki >= 5) {
            stotinki -= 5;
            countCoins += 1;
        } else if (stotinki >= 2) {
            stotinki -= 2;
            countCoins += 1;
        } else if (stotinki >= 1) {
            stotinki -= 1;
            countCoins += 1;
        }
    }
    console.log(countCoins);
}
solve(["1.23"])