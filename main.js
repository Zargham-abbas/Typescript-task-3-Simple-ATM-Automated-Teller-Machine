#! /usr/bin/env node
import inquirer from "inquirer";
let Balance = 10000;
let Pin = 1357;
let pinAnswer = await inquirer.prompt([
    {
        name: "q1",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.q1 === Pin) {
    console.log("You've entered correct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select any option",
            type: "list",
            choices: ["withdraw", "check balance", "Fastcash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount you want to withdraw",
                type: "list",
                choices: ["1000", "2000", "3000", "4000", "5000", "above 5000"],
            },
        ]);
        if (amountAns.amount < Balance) {
            Balance -= amountAns.amount;
            console.log("your remaining balance is:" + Balance);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your current balance is:" + Balance);
    }
    else if (operationAns.operation === "Fastcash") {
        let fast = await inquirer.prompt([
            {
                name: "fast_atm",
                message: "How much money you want to withdraw",
                type: "list",
                choices: ["1000", "2000", "3000", "4000", "5000"],
            },
        ]);
        if (fast.fast_atm === "1000") {
            Balance -= fast.fast_atm;
            console.log(`your remaining balance is ${Balance}`);
        }
        if (fast.fast_atm === "2000") {
            Balance -= fast.fast_atm;
            console.log(`your remaining balance is ${Balance}`);
        }
        if (fast.fast_atm === "3000") {
            Balance -= fast.fast_atm;
            console.log(`your remaining balance is ${Balance}`);
        }
        if (fast.fast_atm === "4000") {
            Balance -= fast.fast_atm;
            console.log(`your remaining balance is ${Balance}`);
        }
        if (fast.fast_atm === "5000") {
            Balance -= fast.fast_atm;
            console.log(`your remaining balance is ${Balance}`);
        }
    }
    else {
        console.log("invalid pin");
    }
}
