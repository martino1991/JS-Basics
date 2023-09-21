// За даден период от време, всеки ден в болницата пристигат пациенти за преглед. Тя разполага първоначално със 7 лекари. 
// Всеки лекар може да преглежда само по един пациент на ден, но понякога има недостиг на лекари, затова останалите пациенти се изпращат в други болници. 
// Всеки трети ден, болницата прави изчисления и ако броят на непрегледаните пациенти е по-голям от броя на прегледаните, се назначава още един лекар. 
// Като назначаването става преди да започне приемът на пациенти за деня.
// Напишете програма, която изчислява за дадения период броя на прегледаните и непрегледаните пациенти.
// Вход
// Входът се чете от конзолата и съдържа:
// •	На първия ред – периода, за който трябва да направите изчисления. Цяло число в интервала [1 ... 1000]
// •	На следващите редове(равни на броят на дните) – броя пациенти, които пристигат за преглед за текущия ден. Цяло число в интервала [0…10 000]
// Изход
// Да се отпечатат на конзолата 2 реда :
// •	На първия ред: "Treated patients: {брой прегледани пациенти}."
// •	На втория ред: "Untreated patients: {брой непрегледани пациенти}."

function hospital(input) {
    let days = Number(input[0]);
    let doktors = 7;
    let index = 1;

    let examinedPatients = 0;
    let patientsNotExamined = 0;

    for (let curDay = 1; curDay <= days; curDay++) {
        let patients = Number(input[index])
        index++;
        if (curDay % 3 === 0) {
            if (patientsNotExamined > examinedPatients) {
                doktors += 1;
            }
        }
        if (patients >= doktors) {
            examinedPatients += doktors;
            patientsNotExamined += patients - doktors;
        } else if (patients < doktors) {
            examinedPatients += patients;
        }

    }
    console.log(`Treated patients: ${examinedPatients}.`);
    console.log(`Untreated patients: ${patientsNotExamined}.`);
}
hospital(["4", "7", "27", "9", "1"])