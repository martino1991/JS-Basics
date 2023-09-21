// Гошо работи в ресторант и отговаря за зареждането на съдомиялната накрая на деня.
// Вашата задача е да напишете програма, която изчислява, дали дадено закупено количество бутилки от препарат за съдомиялна е достатъчно, 
// за да измие определено количество съдове. Знае се, че всяка бутилка съдържа 750 мл. препарат, за 1 чиния са нужни 5 мл., а за тенджера 15 мл.  Приемете, 
// че на всяко трето зареждане със съдове, съдомиялната се пълни само с тенджери, а останалите пъти с чинии. Докато не получите команда "End" ще продължите да получавате бройка съдове, 
// които трябва да бъдат измити.
// Вход:
// От конзолата се четат:
// •	Брой бутилки от препарат, който ще бъде използван за миенето на чинии - цяло число в интервала [1…10] 
// На всеки следващ ред, до получаване на командата "End" или докато количеството препарат не се изчерпи, брой съдове, 
// които трябва да бъдат измити - цяло число в интервала [1…100]
// Изход:
// В случай, че количеството препарат е било достатъчно за измиването на съдовете:
// "Detergent was enough!"
// "{брой чисти чинии} dishes and {брой чисти тенджери} pots were washed."
// "Leftover detergent {количество останал препарат} ml."
// В случай, че количеството препарат не е било достатъчно за измиването на съдовете:
// "Not enough detergent, {количество не достигнал препарат} ml. more necessary!"

function dishWascher(input) {
    let cleaningAgent = Number(input[0]);
    let cleaningAgentInMl = cleaningAgent * 750;

    let container = "";

    let countPlates = 0;
    let countPots = 0;

    let totalMl = 0;
    
    let circel = 1;

    index = 1
    let command = input[index];

    while (command !== "End") {

        if (circel % 3 === 0) {
            container = "Pots";
            let pots = Number(command);
            let PotsInMl = pots * 15;
            totalMl += PotsInMl;
            countPots += Number(command);
            circel += 1;
        } else {
            container = "plates"
            let plates = Number(command);
            let platesInMl = plates * 5;
            totalMl += platesInMl;
            countPlates += Number(command);
            circel += 1;
        }

        if (cleaningAgentInMl < totalMl) {
            console.log(`Not enough detergent, ${totalMl - cleaningAgentInMl} ml. more necessary!`);
            return;
        }

        index++;
        command = input[index];

    }

    console.log("Detergent was enough!");
    console.log(`${countPlates} dishes and ${countPots} pots were washed.`);
    console.log(`Leftover detergent ${cleaningAgentInMl - totalMl} ml.`);
}
dishWascher (["1","10","15","10","12","13","30"]);