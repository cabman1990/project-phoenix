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
