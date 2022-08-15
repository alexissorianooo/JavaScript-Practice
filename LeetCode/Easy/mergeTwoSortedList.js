var mergeTwoLists = function (list1, list2) {
  var answer = list1.concat(list2);
  return answer.sort((a, b) => a - b);
};

var list1 = [1, 2, 4];
var list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2));
