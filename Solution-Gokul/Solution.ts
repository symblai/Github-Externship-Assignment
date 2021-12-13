import inquirer from "inquirer";

export class FixEquation {
  a: string;
  b: string;
  c: string;
  d: string;

  constructor() {
    this.a = "";
    this.b = "";
    this.c = "";
    this.d = "";
  }
  hasMissingDigit(input: string): boolean {
    return input.includes('?');
  }
  getQuestionMark(original: string, mask: string): string {
    // console.log(original, mask);
    if (original.length !== mask.length)
      return "";
    for (var i = 0; i < mask.length; i++) {
      if (mask[i] === '?') {
        return original[i] as string;
      } else if (original[i] != mask[i]) {
        return "";
      }
    }
    return "";
  }
  async findMissingDigit(): Promise<number> {
    let missingDigit = "-1";
    // console.log(this.d)
    // is ? present in d -> compute lhs
    if (this.hasMissingDigit(this.d)) {
      let resultant: number = parseInt(this.a) * parseInt(this.b) + parseInt(this.c);
      missingDigit = this.getQuestionMark(resultant.toString(), this.d);
      missingDigit = missingDigit === "" ? "-1" : missingDigit;
    } else if (this.hasMissingDigit(this.c)) {
      let resultant: number = parseInt(this.d) - parseInt(this.a) * parseInt(this.b);
      missingDigit = this.getQuestionMark(resultant.toString(), this.c);
      missingDigit = missingDigit === "" ? "-1" : missingDigit;
    } else if (this.hasMissingDigit(this.a)) {
      let resultant: number = (parseInt(this.d) - parseInt(this.c)) / parseInt(this.b);
      missingDigit = this.getQuestionMark(resultant.toString(), this.a);
      missingDigit = missingDigit === "" ? "-1" : missingDigit;
    } else if (this.hasMissingDigit(this.b)) {
      let resultant: number = (parseInt(this.d) - parseInt(this.c)) / parseInt(this.a);
      missingDigit = this.getQuestionMark(resultant.toString(), this.b);
      missingDigit = missingDigit === "" ? "-1" : missingDigit;
    } else {
      console.error("No ? found");
    }
    return parseInt(missingDigit);
  }
  async getInput(): Promise<string> {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "Equation",
        message: "Input the equation"
      }
    ]);
    return answers["Equation"];
  }
  parseEquation(equation: string) {
    let params = equation.split(" ");
    this.a = params[0]
    this.b = params[2]
    this.c = params[4]
    this.d = params[6]
  }
}

if (require.main === module) {
  (async () => {
    const app = new FixEquation();
    let equation: string = await app.getInput();
    app.parseEquation(equation);
    let result = await app.findMissingDigit()
    console.log("The missing digit is: ", result);
  })()
}

