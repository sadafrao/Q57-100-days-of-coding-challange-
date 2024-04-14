// find a average grade givn a list of grade 
var grades = [94, 72, 99, 87, 65];
// calculate the average grade
var average = grades.reduce(function (a, b) { return a + b; }) / grades.length;
console.log(average);
