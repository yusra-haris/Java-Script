const prompt = require('prompt-sync')();

let length = prompt('Enter length? ');
let width = prompt('Enter width? ');

const calculatearea = (length, width) => {
    let area = length * width
    return `Area is ${area} unit square`
};
console.log(calculatearea(length , width));

