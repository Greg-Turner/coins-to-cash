// create an object with properties of the quantities of various coins
const piggyBank = {"pennies": 342,"nickels": 83,"dimes": 21,"quarters": 15}

//formular to calculate the total value - convert everything to pennies then convert total to dollars
let dollarAmount = (piggyBank["pennies"]+(piggyBank["nickels"]*5)+(piggyBank["dimes"]*10)+(piggyBank["quarters"]*25))/100
console.log(dollarAmount)
