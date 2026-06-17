/**
 * Then build a simple Flex Earnings Calculator.
 *
 * Requirements:
 *
 * Store:   Block pay
 *          Miles driven
 *          Gas price
 *          MPG
 * Calculate:
 *          Fuel cost
 *          Profit after fuel
 *          Print results nicely
 */

const blockPay = 89.50;
const milesDriven = Math.floor(Math.random() * 100) + 1;
const gasPrice = 3.90;
const MPG = 20;

let fuelCost = ((gasPrice/MPG) * milesDriven).toFixed(2);
let profit = (blockPay - fuelCost).toFixed(2);

console.log(`Block Pay: $${blockPay}`);
console.log(`Miles: ${milesDriven}`);
console.log(`Fuel Cost: $${fuelCost}`);
console.log(`Estimated Profit: $${profit}`);


const routes = [
    { pay: 89.50, miles: 65 },
    { pay: 72.00, miles: 40 },
    { pay: 110.50, miles: 90 }
];


function totalPay (routes){
   let totalPay = 0;

    routes.forEach(function (route){
        totalPay += route.pay;
    })

    return totalPay;
}

function averagePay (routes) {
    return totalPay(routes)/routes.length;
}

function totalMiles(routes){
    let totalMiles = 0;

    routes.forEach(function (route){
        totalMiles += route.miles;
    })

    return totalMiles;
}

function averageMiles (routes){
    return totalMiles(routes)/routes.length;
}

function highestPayingRoute(routes){
    let highestPay = 0;
    let index = null;

    for (let counter = 0; counter < routes.length; counter++){
        if(routes[counter].pay > highestPay){
            highestPay = routes[counter].pay;
            index = counter;
        }
    }

    return index;
}

const mostProfit = routes[highestPayingRoute(routes)];

console.log(`Total Pay:\t$${totalPay(routes)}`);
console.log(`Average Pay:\t$${averagePay(routes).toFixed(2)}`);
console.log(`Total Miles:\t${totalMiles(routes)}`);
console.log(`Average Miles:\t${averageMiles(routes)}`);
console.log(`The most profitable route was:\t$${mostProfit.pay} with a total of ${mostProfit.miles} miles`);