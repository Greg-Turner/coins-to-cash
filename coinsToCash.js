// create an object with properties of the quantities of various coins
const piggyBank = {"pennies": 342,"nickels": 83,"dimes": 21,"quarters": 15}

let dollarAmount = (piggyBank["pennies"]+(piggyBank["nickels"]*5)+(piggyBank["dimes"]*10)+(piggyBank["quarters"]*25))/100
console.log(dollarAmount)
