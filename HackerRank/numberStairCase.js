function staircase(n) {
  // Write your code here
  let space = n - 1;
  let hashtag = 1;
  while (n > 0) {
    console.log(`${" ".repeat(space)}${"#".repeat(hashtag)}`);
    // console.log(space,hashtag)
    hashtag++;
    space--;
    n--;
  }
}

staircase(4);
