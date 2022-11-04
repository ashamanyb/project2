// My Home Work 2
const footballClub = "Manchester United FC";
console.log(footballClub);
let foundationYear = 1878;
console.log(foundationYear);
let isTopTeam = true
console.log(isTopTeam);
let titleHasNotBeenWon = null;
console.log(titleHasNotBeenWon);
let titleCountInThisYear;
console.log(titleCountInThisYear)


    player = {
    id : 1 ,
    name: "Bruno Ferndandes",
    playerNumber: 8,
    salaryInPoundSterling: 280000
    }

    player1 = {
    id : 2 ,
    name: "Davide de Gea",
    playerNumber: 1,
    salaryInPoundSterling: 281000
    }

    player2 = {
        id: 3,
        name: "Antonty Martial",
        playerNumber: 9,
        salaryInPoundSterling: 250000
    }

console.log(player,player1,player2);

player1.salaryInPoundSterling = 290000;
console.log(player1)


let vehicle = {};
vehicle.brandName = "BMW";
console.log(vehicle);
vehicle.model = "X5";
console.log(vehicle);
vehicle.model = "M1";
console.log(vehicle);
delete vehicle.model;
console.log(vehicle)


let salaries = {
    Aroo: 100,
    Dalida: 160,
    Samat: 130,
}
    
console.log(salaries)

function sumOfSalaries(salaries) {
    let sum=0; 
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}

console.log(sumOfSalaries(salaries))