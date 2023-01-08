let randomNo = Number.parseInt(Math.floor(Math.random() * 100) + 1);
let chance = 0;
let guess;
do {
    guess = prompt("Enter a random number! ");
    if (guess > randomNo) console.log("High");
    else console.log("Low");
} while (guess != randomNo);
