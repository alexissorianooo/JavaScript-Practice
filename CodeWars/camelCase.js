/**
 * Complete the solution so that the function will break up camel casing, using a space between words.
 *
 * Example
 * "camelCasing"  =>  "camel Casing"
 * "identifier"   =>  "identifier"
 * ""             =>  ""
 */

function solution(string) {
  var answer = [];
  for (let i = 0; i < string.length; i++) {
    if (/[A-Z]/.test(string[i])) {
      answer.push(string.substring(0, i));
      string = string.substring(i);
      i = 0;
    }
  }
  answer.push(string);
  console.log(answer.join(" "));
  return answer.join(" ");
}
solution("camelCasing");

// CLEVER

function solutionBEST(string) {
  return string.replace(/([A-Z])/g, " $1");
}
