//Exercise 1: Restaurant Greeter
let guestName = "Bob";
let partySize = 4;

console.log(`Welcome ${guestName}!`);
console.log(`Your party of ${partySize} is ready.`);

//Exercise 2: Capones Menu Count
let menuItems = ["Burger", "Steak", "Salad", "Wings"];

menuItems.forEach(function (entry) {
    console.log(entry);
})

//Exercise 3: Server Section

let tables = [12, 14, 16, 21, 25];

tables.forEach(function (entry) {
    if (entry > 20){
        console.log(entry);
    }
})

//Exercise 4: Tip Calculator

function calculateTip(billAmount){
    return billAmount * .20;
}

console.log(calculateTip(100));
console.log(calculateTip(50));

//Exercise 5: Dog Registry

let dog = {
    dog1: {name: "Zellie", age: "10"},
    dog2: {name: "Peanut", age: "3"}
};

console.log(`${dog.dog1.name} is ${dog.dog1.age} years old!`)
console.log(`${dog.dog2.name} is ${dog.dog2.age} years old!`)

//Exercise 6: The One That Actually Matters

const sales = [1250, 980, 2200, 1750, 3100];

console.log(calculateHighest(sales));
console.log(calculateAverage(sales));
console.log(calculateTotal(sales));

function calculateHighest(sales){
    let highestSale = 0;

    sales.forEach(function (entry){
        if(entry > highestSale){
            highestSale = entry;
        }
    })

    return highestSale;
}

function calculateAverage(sales){
    let length = sales.length;
    let total = 0;

    sales.forEach(function (entry) {
        total += entry;
    })

    return total/length;
}

function calculateTotal(sales){
    let total = 0;

    sales.forEach(function (entry){
        total += entry;
    })

    return total;
}