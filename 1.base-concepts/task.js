
"use strict";

function solveEquation(a, b, c) {
  const d = b**2 - 4 * a * c;

  if (d < 0) {
    return [];
  } else if (d === 0) {
    const x = -b / (2*a);
    return [x];
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2*a);
    const x2 = (-b - Math.sqrt(d)) / (2*a);
    return [x1, x2];
  }
}


const roots = solveEquation(1, -5, 6); 
console.log(roots); 

const roots1 = solveEquation(1, 2, 1);
console.log(roots1); 

const roots2 = solveEquation(1, 1, 1);
console.log(roots2); 




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  const P = percent / 100 / 12;
  const S = amount - contribution;
  const monthlyPayment = S * (P + (P / (Math.pow(1 + P, countMonths) - 1)));
  const totalAmount = contribution + monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}


console.log(calculateTotalMortgage(10, 0, 50000, 12));   
console.log(calculateTotalMortgage(10, 1000, 50000, 12));  
console.log(calculateTotalMortgage(10, 0, 20000, 24));   
console.log(calculateTotalMortgage(10, 1000, 20000, 24));  
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); 
console.log(calculateTotalMortgage(10, 0, 10000, 36));   
console.log(calculateTotalMortgage(15, 0, 10000, 36));   
console.log(calculateTotalMortgage(10, 'k', 50000, 12)); 
