// Напишете функция, която отпечатва числата в диапазона от 1 до 1000, които завършват на 7.

function numbersEnding(inputAera){
    
    for(i = 0 ; i < 1000 ; i += 1){

        if(i % 10 === 7){
        console.log(i);
        }
    }
}
numbersEnding([""]);