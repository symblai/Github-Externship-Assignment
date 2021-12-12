const readline = require("readline-sync");

console.log("Enter the test case:");
let t = Number(readline.question());
while (t--) {
  console.log("Enter the string");
  let a = readline.question();
  let arr = a.split(/[\s,]+/);

  if (arr[0].indexOf("?") != -1) {
    let ans = (Number(arr[6]) - Number(arr[4])) / Number(arr[2]);

    ans = ans.toString();
    if (ans.length == arr[0].length) {
      for (let i = 0; i < arr[0].length; i++) {
        if (ans[i] != arr[0][i]) {
          console.log(ans[i]);
        }
      }
    } else {
      console.log(-1);
    }
  } else if (arr[2].indexOf("?") != -1) {
    let ans = (Number(arr[6]) - Number(arr[4])) / Number(arr[0]);

    ans = ans.toString();
    if (ans.length == arr[2].length) {
      for (let i = 0; i < arr[2].length; i++) {
        if (ans[i] != arr[2][i]) {
          console.log(ans[i]);
        }
      }
    } else {
      console.log(-1);
    }
  } else if (arr[4].indexOf("?") != -1) {
    let ans = Number(arr[6]) - Number(arr[0]) * Number(arr[2]);

    ans = ans.toString();

    if (ans.length == arr[4].length) {
      for (let i = 0; i < arr[4].length; i++) {
        if (ans[i] != arr[4][i]) {
          console.log(ans[i]);
        }
      }
    } else {
      console.log(-1);
    }
  } else {
    let ans = Number(arr[0]) * Number(arr[2]) + Number(arr[4]);

    ans = ans.toString();
    if (ans.length == arr[6].length) {
      for (let i = 0; i < arr[6].length; i++) {
        if (ans[i] != arr[6][i]) {
          console.log(ans[i]);
        }
      }
    } else {
      console.log(-1);
    }
  }
}
