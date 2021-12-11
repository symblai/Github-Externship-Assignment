class FixEquation {
  constructor() {
    this.terms_array = [];
  }
  /*--------helper function to extract--------------
    --------numeric terms from equation-----------*/
  extract_terms(equation) {
    // extracting all the terms in array by
    // splitting the equation string using regex
    this.terms_array = equation.split(/[*+=]/);

    // removing extra space from each term
    for (let i = 0; i < this.terms_array.length; ++i) {
      this.terms_array[i] = this.terms_array[i].trim();
    }
  }

  /*--------helper function to find--------------
    --------terms with question mark-----------*/
  term_with_qs_mark() {
    let ans = {};
    // looping through term array
    // to find elem with ? mark
    this.terms_array.forEach((elem) => {
      if (elem.indexOf("?") != -1) {
        let pos = elem.indexOf("?");
        ans = { unknown_term: elem, pos };
      }
    });

    return ans;
  }

  /*--------helper function to convert--------------
    --------string elem in array to int-----------*/
  string_to_int(unknown_term) {
    for (let i = 0; i < this.terms_array.length; ++i) {
      if (this.terms_array[i] !== unknown_term)
        this.terms_array[i] = parseInt(this.terms_array[i]);
    }
  }

  /*------------main function-------------*/
  find_missing_digit(equation) {
    /* ----------extracting all numeric terms-------------*/

    this.extract_terms(equation);

    /* -------------finding unknown term----------------*/

    // storing unknown term and position of ? mark in unknown term string
    let { unknown_term, pos } = this.term_with_qs_mark();

    // storing all string terms
    let a = this.terms_array[0],
      b = this.terms_array[1],
      c = this.terms_array[2],
      d = this.terms_array[3];

    /* --------finding unknown term value based upon--------
    -----------cases and solving linear equation-----------*/

    let unknown_term_value;

    // converting all string terms to
    // integer for calculation purpose
    this.string_to_int(unknown_term);

    // storing all int terms
    let A = this.terms_array[0],
      B = this.terms_array[1],
      C = this.terms_array[2],
      D = this.terms_array[3];

    //cases
    switch (unknown_term) {
      // If A is unknown, A = (D - C) / B
      case a:
        unknown_term_value = ((D - C) / B).toString();
        break;

      // If B is unknown, B = (D - C) / A
      case b:
        unknown_term_value = ((D - C) / A).toString();
        break;

      // If C is unknown, C = D - A * B
      case c:
        unknown_term_value = (D - A * B).toString();
        break;

      // If D is unknown, D = C + A * B
      case d:
        unknown_term_value = (C + A * B).toString();
        break;

      default:
        unknown_term_value = -1;
        break;
    }

    /* -----------Checking for wrong result--------------*/
    if (
      unknown_term_value === -1 ||
      unknown_term_value.length !== unknown_term.length
    )
      return -1;
    else return parseInt(unknown_term_value[pos]);
  }
}

/*---------------driver code----------------*/

const equations = [
  "42 * 47 + 2 = 1?76", // returns: 9
  "4? * 47 + 2 = 1976", // returns: 2
  "42 * ?7 + 2 = 1976", // returns: 4
  "42 * ?47 + 2 = 1976", // leading zero, returns: -1
  "2 * 12? + 2 = 247", // decimal value, reurns: -1
  "2 * 123 + 2 = 247", // no ? mark, returns: -1
];

let i = 1;
equations.forEach((equation) => {
  let Solve = new FixEquation();
  let ans = Solve.find_missing_digit(equation);
  console.log(`Test ${i++}:\n\t Equation: ${equation} \n\t Answer: ${ans}`);
});
