class FixEquation {
  // convert the equation into array
  getNumbers(equation) {
    const digits = equation.split(/[+,*,=,]/)
    return digits.map((digit) => {
      return digit.trim()
    })
  }

  // find index of ?
  getMissingIndex(digit) {
    return digit.findIndex((element) => {
      return element.includes('?')
    })
  }

  // find the missing number
  getMissingNumber(digits, index) {
    // convert String array to int array
    const digit = digits.map((number) => {
      return parseInt(number)
    })

    if (index == 1) {
      return (digit[3] - digit[2]) / digit[0]
    } else if (index === 2) {
      return digit[3] - digit[0] * digit[1]
    } else if (index === 3) {
      return digit[0] * digit[1] + digit[2]
    } else {
      return (digit[3] - digit[2]) / digit[1]
    }
  }

  // return the missing digit at ?
  getMissingDigit(equation) {
    const digits = this.getNumbers(equation)
    const digitIndex = this.getMissingIndex(digits)
    const missingDigit = this.getMissingNumber(digits, digitIndex)
    const missingValue = digits[digitIndex]
    const digit = missingDigit.toString()

    if (digit.length === missingValue.length) {
      const missingIndex = missingValue.toString().indexOf('?')
      return digit[missingIndex]
    }
    return -1
  }
}

const obj = new FixEquation()

// Test 1
const equation1 = '42 * 47 + 2 = 1?76'
const test1 = obj.getMissingDigit(equation1)
console.log(`Test 1:\n\t Equation: ${equation1} \n\t Answer: ${test1}`)

// Test 2
const equation2 = '4? * 47 + 2 = 1976'
const test2 = obj.getMissingDigit(equation2)
console.log(`Test 2:\n\t Equation: ${equation2} \n\t Answer: ${test2}`)

// Test 3
const equation3 = '42 * ?7 + 2 = 1976'
const test3 = obj.getMissingDigit(equation3)
console.log(`Test 3:\n\t Equation: ${equation3} \n\t Answer: ${test3}`)

// Test 4
const equation4 = '42 * ?47 + 2 = 1976'
const test4 = obj.getMissingDigit(equation4)
console.log(`Test 4:\n\t Equation: ${equation4} \n\t Answer: ${test4}`)

// Test 5
const equation5 = '2 * 12? + 2 = 247'
const test5 = obj.getMissingDigit(equation5)
console.log(`Test 5:\n\t Equation: ${equation5} \n\t Answer: ${test5}`)
