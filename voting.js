const elligibilitychecker = (name,age) => {
    if (age >= 18) {
        return `${name} , You are elligible for voting`;
    } 
    else {
        return `${name} , You are not elligible for voting` ;
    };
};
console.log( elligibilitychecker("Yusra" , 20));

const prompt = require('prompt-sync')();
let name = prompt('Enter your name : ');
let age = prompt('Enter your age : ');

console.log(elligibilitychecker(name,age));

