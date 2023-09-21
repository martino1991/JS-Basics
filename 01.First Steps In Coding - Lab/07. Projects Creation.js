function projectsCreation(input) {
    //Напишете програма, която изчислява колко часа ще са необходими на един архитект,
    //за да изготви проектите на няколко строителни обекта. Изготвянето на един проект отнема три часа.
    let architect = input[0];
    let projectsCount = Number(input[1]);
    let hoursNeeded = projectsCount * 3;

    let result = `The architect ${architect} will need ${hoursNeeded} hours to complete ${projectsCount} project/s.`;
    console.log(result);

}