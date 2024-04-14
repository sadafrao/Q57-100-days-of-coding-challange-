// find a average grade givn a list of grade 

let grades = [94,72,99,87,65];
// calculate the average grade
let average = grades.reduce((a,b) => a+b)/grades.length;
console.log(average);
// first we can add all grades than divide how many grades there are to get the average