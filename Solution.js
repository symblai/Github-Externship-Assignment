class FixEquation {
  /**
   * Returns the expected number in place of marked symbol(?) when compared between MarkedStringValue and NumericValue
   * @param {String} MarkedStringValue
   * @param {Number} NumericValue
   * @return {Number}
   * @memberof FixEquation
   */
  findMarkerValue(MarkedStringValue, NumericValue) {
    if (NumericValue < 0) return -1;
    if (MarkedStringValue.length !== `${NumericValue}`.length) return -1;
    const idx = MarkedStringValue.indexOf("?");
    const ans = `${NumericValue}`[idx];
    let stringAfterSubstitution =
      MarkedStringValue.substring(0, idx) +
      ans +
      MarkedStringValue.substring(idx + 1);
    return stringAfterSubstitution === `${NumericValue}` ? ans : -1;
  }

  /**
   * Returns the missing digit of the equation
   * @param {String} equation
   * @return {Number}
   * @memberof FixEquation
   */
  findMissingDigit(equation) {
    //split equation to each corresponding variables. eg: '10*2-3=1?' => A='10' B='2' C='3' D='1?'
    let [A, B, C, D] = equation.split(/[\*\+\=]/);
    A = A.trim();
    B = B.trim();
    C = C.trim();
    D = D.trim();
    //checks if A is not a number. eg: for non integer value +A gives NAN as output, which on negating gives true as output. This checks if the value contains marker symbol(?)
    if (!+A) {
      let numericA = (D - C) / B;
      return this.findMarkerValue(A, numericA);
    } else if (!+B) {
      let numericB = (D - C) / A;
      return this.findMarkerValue(B, numericB);
    } else if (!+C) {
      let numericC = D - A * B;
      return this.findMarkerValue(C, numericC);
    } else {
      let numericD = A * B + +C;
      return this.findMarkerValue(D, numericD);
    }
  }
}
