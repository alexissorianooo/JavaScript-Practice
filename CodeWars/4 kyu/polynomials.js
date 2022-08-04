/**
 * When we attended middle school were asked to simplify mathematical expressions like "3x-yx+2xy-x" (or usually bigger), and that was easy-peasy ("2x+xy"). But tell that to your pc and we'll see!
 * Write a function: simplify, that takes a string in input, representing a multilinear non-constant polynomial in integers coefficients (like "3x-zx+2xy-x"), and returns another string as output where the same expression has been simplified in the following way ( -> means application of simplify):
 *
 * All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.:
 * "cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab"
 *
 * All monomials appears in order of increasing number of variables, e.g.:
 * "-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz"
 *
 * If two monomials have the same number of variables, they appears in lexicographic order, e.g.:
 * "a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz"
 *
 * There is no leading + sign if the first coefficient is positive, e.g.:
 * "-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y"
 */

// look for operations and add space to be able to split(' ')
// iterate thorugh items and sort
// use object to partner monomials

// console.time("speed");
function simplify(poly) {
  var splitpol = poly.replace(/([+*\/-])/g, " $1").split(" ");
  var polSorted = [];
  var monomialsArr = [];
  var monomials = {};
  var polynomial = [];

  for (let items of splitpol) {
    polSorted.push(items.split("").sort().join(""));
  }
  if (polSorted[0] === "") {
    polSorted.shift();
  }
  console.log(polSorted);

  // making monomial objects
  for (let items of polSorted) {
    monomials = {};
    var numbers = /[\d]/g.exec(items);
    var letters = /[a-zA-Z]/g.exec(items);
    var operations = /[*+\/-]/g.exec(items);
    if (numbers !== null) {
      monomials.numbers = numbers.input.replace(/[a-zA-Z+*\/-]/g, "");
    } else {
      monomials.numbers = "1";
    }
    monomials.letters = letters.input.split("").splice(letters.index).join("");
    if (operations !== null) {
      monomials.operations = operations.input
        .split("")
        .splice(operations.index, 1)
        .join("");
    } else {
      monomials.operations = "+";
    }
    monomialsArr.push(monomials);
  }
  // console.log(monomialsArr);

  for (let i = 0; i < monomialsArr.length; i++) {
    // let tempLetters = monomialsArr[i].letters;
    for (let j = i + 1; j < monomialsArr.length; j++) {
      if (monomialsArr[j].letters === monomialsArr[i].letters) {
        // console.log(
        //   monomialsArr[i].letters,
        //   i,
        //   monomialsArr[j].letters,
        //   j,
        //   "answer:",
        //   eval(
        //     `${monomialsArr[i].operations}${monomialsArr[i].numbers} ${monomialsArr[j].operations} ${monomialsArr[j].numbers}`
        //   ),
        //   monomialsArr[i].letters === monomialsArr[j].letters
        //   // tempLetters === monomialsArr[j].letters
        // );
        var answer = eval(
          `${monomialsArr[i].operations && monomialsArr[i].operations}${
            monomialsArr[i].numbers
          } ${monomialsArr[j].operations && monomialsArr[j].operations} ${
            monomialsArr[j].numbers
          }`
        );
        if (answer <= 0) {
          monomialsArr.splice(j, 1);
          monomialsArr.splice(i, 1);
          i = 0;
          j = i + 1;
          answer = 0;
        } else {
          monomialsArr.push({
            numbers: /[\d]/g.exec(answer).input.replace(/[a-zA-Z+*\/-]/g, ""),
            letters: monomialsArr[i].letters,
            operations:
              answer.toString().split("")[0] === "-" // if negative
                ? answer.toString().split("")[0]
                : "+",
          });
          // polynomial.push((answer === 1 ? "" : answer) + monomialsArr[i].letters);
          i = 0;
          monomialsArr.splice(j, 1);
          j = i + 1;
          monomialsArr.splice(i, 1);
        }
        answer = "";
      }
    }
    // if (monomialsArr.length > 0) {
    //   polynomial.push(
    //     monomialsArr[i].operations +
    //       monomialsArr[i].numbers +
    //       monomialsArr[i].letters
    //   );
    // }

    // else if (monomialsArr.length > 0) {
    //   polynomial.push(
    //     monomialsArr[i].operations +
    //       monomialsArr[i].numbers +
    //       monomialsArr[i].letters
    //   );
    // }
  }
  // for (let i = 0; i < monomialsArr.length; i++) {
  //   if (i === 0) {
  //     polynomial.push(
  //       (monomialsArr[i].operations === "+" ? "" : monomialsArr[i].operations) +
  //         (monomialsArr[i].numbers === "1" ? "" : polynomial[i].numbers) +
  //         monomialsArr.letters
  //     );
  //   } else {
  //     polynomial.push(
  //       monomialsArr.operations + monomialsArr.numbers + monomialsArr.letters
  //     );
  //   }
  // }
  var index = 0;
  for (let items of monomialsArr) {
    if (index === 0) {
      polynomial.push(
        items.operations +
          (items.numbers === "1" ? "" : items.numbers) +
          items.letters
      );
    } else {
      polynomial.push(
        items.operations +
          (items.numbers === "1" ? "" : items.numbers) +
          items.letters
      );
    }
    index++;
  }
  // console.log(polynomial.sort());
  // polynomial = polynomial.sort().join("");
  // var wow = polynomial.split("")[0] === "+" && polynomial.substring(1);
  console.log(polynomial.sort());
  // console.log(monomialsArr);
  // var wow = polynomial[0].split("");
  // console.log(wow);
}

// simplify("dc+12dcba");
// simplify("2xy-yx");
simplify("-a+5ab+3a-c-2a");
