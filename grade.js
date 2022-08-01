// GWA = (Grade x Number of Units) ÷ Total Number of Units
// console.time("grade");
// function gwaCompute(units, grades) {
//   var addGrades = [];
//   var allUnits = [];
//   for (let i = 0; i < grades.length; i++) {
//     addGrades.push(
//       grades[i].map((item) => item * units[i]).reduce((a, b) => a + b)
//     );
//     for (let j = 0; j < grades[i].length; j++) {
//       allUnits.push(units[i]);
//     }
//   }
//   var sumOfGrades = addGrades.reduce((a, b) => a + b);
//   var sumOfUnits = allUnits.reduce((a, b) => a + b);

//   return sumOfGrades / sumOfUnits;
// }

// var units11 = [3, 2];
// var grades11 = [[1.75, 1.75, 2.25, 1.25, 1.5, 2.25], [1]];
// console.log(gwaCompute(units11, grades11));
// console.timeEnd("grade");

function computeGWA(records) {
  let totalUnits = 0;
  let totalGrade = 0;
  for (record of records) {
    totalUnits += record.units;
    totalGrade = totalGrade + record.units * record.grade;
  }
  return totalGrade / totalUnits;
}

var grade11 = [
  { units: 3, grade: 1.75 },
  { units: 3, grade: 1.75 },
  { units: 3, grade: 2.25 },
  { units: 3, grade: 1.25 },
  { units: 3, grade: 1.5 },
  { units: 3, grade: 2.25 },
  { units: 2, grade: 1 },
];

var grade12 = [
  { units: 3, grade: 2 },
  { units: 3, grade: 2 },
  { units: 3, grade: 2.25 },
  { units: 3, grade: 1.5 },
  { units: 3, grade: 2 },
  { units: 2, grade: 1.15 },
];

var grade21 = [
  { units: 3, grade: 2.25 },
  { units: 3, grade: 1.75 },
  { units: 3, grade: 1.25 },
  { units: 3, grade: 1.25 },
  { units: 3, grade: 1 },
  { units: 3, grade: 1.25 },
  { units: 3, grade: 1.75 },
  { units: 2, grade: 1 },
];

var grade22 = [
  { units: 3, grade: 1.75 },
  { units: 3, grade: 1.75 },
  { units: 3, grade: 2.0 },
  { units: 3, grade: 1.25 },
  { units: 3, grade: 1.75 },
  { units: 3, grade: 1.5 },
  { units: 3, grade: 1.5 },
  { units: 2, grade: 1.25 },
];

var grade31 = [
  { units: 3, grade: 1.5 },
  { units: 3, grade: 1.25 },
  { units: 3, grade: 1.25 },
  { units: 3, grade: 1.0 },
  { units: 3, grade: 1.5 },
  { units: 3, grade: 1.0 },
  { units: 3, grade: 1.5 },
];

var grade32 = [
  { units: 3, grade: 1.5 },
  { units: 3, grade: 1 },
  { units: 3, grade: 1.75 },
  { units: 3, grade: 1.0 },
  { units: 3, grade: 1.5 },
  { units: 3, grade: 1.0 },
  { units: 3, grade: 1.5 },
];

var grade33 = [
  { units: 3, grade: 1 },
  { units: 3, grade: 1.75 },
];

var grade41 = [
  { units: 3, grade: 1.25 },
  { units: 3, grade: 1.25 },
  { units: 3, grade: 1.0 },
  { units: 3, grade: 1.0 },
  { units: 3, grade: 1.25 },
  { units: 3, grade: 1.75 },
  { units: 3, grade: 1.5 },
  { units: 3, grade: 1.5 },
];

var grade42 = [{ units: 6, grade: 1 }];

var gwa = [];

gwa.push(computeGWA(grade11));
gwa.push(computeGWA(grade12));
gwa.push(computeGWA(grade21));
gwa.push(computeGWA(grade22));
gwa.push(computeGWA(grade31));
gwa.push(computeGWA(grade32));
gwa.push(computeGWA(grade33));
gwa.push(computeGWA(grade41));
gwa.push(computeGWA(grade42));

console.log(gwa);
console.log(gwa.reduce((a, b) => a + b) / gwa.length);
