const prompt = require('prompt-sync')();

let principle = prompt('Enter principle: $');
let rate = prompt('Enter the rate for interest: ') || 5;
let time = prompt('Enter the time in years: ') || 1;

function interest(principle,rate,time){
    let interest = ((principle * rate * time) /100);
    return ` The interest is $${interest}`;
};

const interestcalculator = (principle, rate = 5, time = 1 ) => {
    let interest = ((principle * rate * time) /100);
    return ` The interest is $${interest}`;
};

console.log(interestcalculator(principle, rate , time));
console.log(interest(principle,rate,time));