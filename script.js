// Checking if a number is big
const theHundredNumber = function(number){
    const someNumber = number;
    if (someNumber > 100){
    return "true";
    }
    return "false";   
};
const result = theHundredNumber(99);
console.log(result);

// Bouncer at a club
const clubBouncer = function(number, age){
    const totalNumber = number;
    const youMayEnter = age;
    if(totalNumber < 1500 && youMayEnter < 18){
        return "this is a club for adults";
    }
    else if (totalNumber >= 1500 && youMayEnter > 18){
        return "It's to bussy, come back later.";
    }
    else if (totalNumber < 1500 && youMayEnter > 18){
    return "Come in!";
    }
};
const allowdA = clubBouncer(1402,17);
console.log(allowdA);
const allowdB = clubBouncer(1502,19);
console.log(allowdB);
const allowdC = clubBouncer(1402,19);
console.log(allowdC);

// Calculating the average
const average = function(numberA, numberB, numberC, numberD, numberE){
    const Calculating = ((numberA + numberB + numberC + numberD + numberE) / 5);
    return Math.round(Calculating);
};

const resultAverage = average(4,6,9,12,18);
console.log(resultAverage);
