let weightMark=prompt("Enter mark weight in kg's");
let heightMark=prompt("Enter mark height in meters");
let weightJohn=prompt("Enter John weight in kg's");
let heightJohn=prompt("Enter John height in meters");

let bmiMark=weightMark/(heightMark**2);
let bmiJohn=weightJohn/(heightJohn**2);

let markHigherBMI=bmiMark>bmiJohn;
console.log(markHigherBMI);