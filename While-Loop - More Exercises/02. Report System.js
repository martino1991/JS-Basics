// На благотворително събитие плащанията за закупените продукти винаги се редуват: плащане в брой и плащане с карта. Установени са следните правила за заплащане:
// •	Ако продуктът надвишава 100лв., за него не може да се плати в брой
// •	Ако продуктът е на цена под 10лв., за него не може да се плати с кредитна карта
// Програмата приключва или след като получим команда "End" или след като средствата бъдат събрани.
// Вход:
// От конзолата се четат:
// •	Сумата, която се очаква да бъде събрана от продажбите - цяло число в интервала [1 ... 10000]
// На всеки следващ ред, до получаване на командата "End" или докато не се съберат нужните средства: цените на предметите, които ще бъдат закупени - цяло число в интервала [1 ... 500]
// Изход:
// На конзолата да се отпечата:
// •	При успешна транзакция: "Product sold!"
// •	При неуспешна транзакция: "Error in transaction!"
// •	Ако сумата на всички закупени продукти надвиши или достигне очакваната сума, програмата трябва да приключи и на конзолата да се изпишат два реда:
// o	"Average CS: {средно плащане в кеш на човек}"
// o	"Average CC: {средно плащане с карта на човек}" 
//               Плащанията трябва да бъдат форматирани до втората цифра след десетичния знак.
// •	При получаване на команда "End", да се изпише един ред:
// o	"Failed to collect required money for charity."

function charitable(input) {
    let expectedAmount = Number(input[0]);
    index = 1;

    let produktPrice = 0;
    let cardPayment = 0;
    let peopleCardPayment = 0
    let peopleCashPayment = 0;
    let cashPayment = 0;

    let command = input[index];
    let currentPayment = 1;

    while (command !== "End") {
        if (currentPayment % 2 === 0) {
            produktPrice = Number(command);
            if (produktPrice < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                cardPayment += produktPrice;
                peopleCardPayment += 1;
            }
            currentPayment += 1;

        } else {
            produktPrice = Number(command);
            if (produktPrice > 100) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                cashPayment += produktPrice;
                peopleCashPayment += 1;
            }
            currentPayment += 1;
        }
        let totalMoney = cashPayment + cardPayment;
        if (totalMoney >= expectedAmount) {
            console.log(`Average CS: ${(cashPayment / peopleCashPayment).toFixed(2)}`);
            console.log(`Average CC: ${(cardPayment / peopleCardPayment).toFixed(2)}`);
            return;
        }
        index++;
        command = input[index];
    }

    console.log("Failed to collect required money for charity.");
}
charitable(["500", "120", "8", "63", "256", "78", "317"]);