#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate a random number
// user input for guessing number
// compair user input with computrt generated number & show result
console.log("\n welcome to number guessing game \n");
const randomNumner = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a number between 1-6 ",
    },
]);
if (answer.userGuessedNumber === randomNumner) {
    console.log("congratulation you guessed right number");
}
else {
    console.log("sorry! you guessed wrong number");
}
