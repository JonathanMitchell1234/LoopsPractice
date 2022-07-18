// While loop to make sure valid number is entered
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

// Generate random number between 1 and maximum
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter you first guess"));
while (guess !== targetNum) {
    
