// Write your code here

class FixEquation {
    // Constructor
    constructor() {
      this.ans = -1;
      this.cpy = "";
    }
  
    // Function
    findMissingDigit(equation) {
      for (let i = "1"; i <= "9"; i++) {
        this.cpy = equation.replace("?", i);
        // console.log(this.cpy);
        let nums = this.cpy.match(/\d+/g);
        if (
          parseInt(nums[0]) * parseInt(nums[1]) + parseInt(nums[2]) ==
          parseInt(nums[3])
        ) {
          this.ans = parseInt(i);
          return this.ans;
        }
      }
      this.ans=-1;
      return this.ans;
    }
  }
  const Sol = new FixEquation();
  
  // Test cases
  
  Sol.findMissingDigit("42 * 47 + 2 = 1?76");
  console.log(Sol.ans);
  Sol.findMissingDigit("4? * 47 + 2 = 1976");
  console.log(Sol.ans);
  Sol.findMissingDigit("42 * ?7 + 2 = 1976");
  console.log(Sol.ans);
  Sol.findMissingDigit("42 * ?47 + 2 = 1976");
  console.log(Sol.ans);
  Sol.findMissingDigit("2 * 12? + 2 = 247");
  console.log(Sol.ans);
  