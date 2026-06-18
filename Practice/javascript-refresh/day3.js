const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const main = async () => {

    function isString(String){
        return isNaN(parseFloat(String));
    }

    function errorMessage(){
        console.log("Please enter a valid number and try again!");
    }

    let name = await askQuestion('What is your name? ');

    let loop = true;
    let blockPay;
    let milesDrove;
    let fuelPrice;
    let MPG;

    while (loop){
        blockPay = await askQuestion('What is your block pay?');

        if (isString(blockPay)){
            errorMessage();
        }
        else {
            loop = false;
        }
    }

    loop = true;

    while (loop){
        milesDrove = await askQuestion('How many miles did you drive? ');
        if (isString(milesDrove)){
            errorMessage();
        }
        else if(milesDrove <= 0){
            console.log("Number must be above 0!");
        }
        else{
            loop = false;
        }
    }

    loop = true;

    while (loop){
        fuelPrice = await askQuestion('What is the current cost of fuel?');

        if(isString(fuelPrice)){
            errorMessage();
        }
        else if (fuelPrice <= 0){
            console.log("As much as we all wish, gas isn't free!")
        }
        else {
            loop = false;
        }
    }

    loop = true;

    while (loop){
        MPG = await askQuestion('How many MPG does your car get?');
        if (isString(MPG)){
            errorMessage();
        }
        else if(MPG <= 0){
            console.log("You might want to think about getting a new car!  MPG must be above 0");
        }
        else{
            loop = false;
        }

    }

    const fuelCost = (fuelPrice/MPG)*milesDrove;

    console.log(`Hello ${name}, welcome back!`);
    console.log(`Block Pay: \t\t$${blockPay}`);
    console.log(`Miles Driven:\t\t ${milesDrove}`);
    console.log(`Fuel Cost:\t\t$${fuelCost.toFixed(2)}`);
    console.log(`Estimated Profit:\t$${(blockPay-fuelCost).toFixed(2)}`);

    rl.close()
}

main();