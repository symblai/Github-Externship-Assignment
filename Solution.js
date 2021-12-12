class FixEquation {
   /**
    * stores each of 4 number variables of the equation
    * @type {number[]}
    */
   #nums

   /**
    * Given the index (0 for A, 1 for B, and so on), calculate and return value of the corresponding number using the other values of the equation.
    * @param {number} idx
    * @returns {number}
    */
   calcValue(idx) {
      let [A, B, C, D] = this.#nums

      let relation = {
         0: (D - C) / B, // value of A
         1: (D - C) / A, // value of B
         2: D - A * B, // value of C
         3: A * B + C, // value of D
      }

      return relation[idx]
   }

   /**
    * Takes equation string in form "A * B + C = D", where each character in each of A, B, C, D will be either a digit ('0'-'9') or a question mark ('?'), with a total of one question mark in the whole equation
    * @param {string} equation - the equation string
    * @returns {number} the value of '?' or -1 if no appropriate value is found
    */
   findMissingDigit(equation) {
      // split on '*', '+' or '=' with any amount of spaces around them
      // resulting array will have 4 strings: A, B, C and D
      let strs = equation.trim().split(/ *[*+=] */)

      this.#nums = strs.map((str) => parseInt(str))

      for (let i = 0; i < strs.length; i++) {
         let str = strs[i]

         if (str.includes('?')) {
            let theoreticalValue = this.calcValue(i)

            if (
               !Number.isInteger(theoreticalValue) ||
               theoreticalValue.toString().length != str.length
            ) {
               return -1
            }

            this.#nums[i] = theoreticalValue

            // converts theoreticalValue to string, and returns the digit in place of '?'
            return parseInt(theoreticalValue.toString()[str.indexOf('?')])
         }
      }

      return -1
   }
}

let testCases = [
   '42 * 47 + 2 = 1?76',
   '4? * 47 + 2 = 1976',
   '42 * ?7 + 2 = 1976',
   '42 * ?47 + 2 = 1976',
   '2 * 12? + 2 = 247',
]

let solution = new FixEquation()

for (let eq of testCases) {
   console.log(`Test case: ${eq}`)
   console.log('Solution: ', solution.findMissingDigit(eq), '\n')
}
