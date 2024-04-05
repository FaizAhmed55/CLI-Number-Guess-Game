#! usr/bin/env node
import inquirer from "inquirer";
console.log();
const systemguess = Math.floor(Math.random() * 10 + 1);
const recall = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "please guess a number between 1 to 10",
    },
]);
if (recall.userguessnumber === systemguess) {
    console.log("Congaratulation! You Guess a Right Number");
}
else {
    console.log("you guess wrong no");
}
