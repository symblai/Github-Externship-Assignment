# Github Externship Assignment

## Problem statement

You are given a String equation containing an equation of the form `A * B + C = D`, where A, B, C and D are positive integers that don't have leading zeros. \
One digit in the equation is missing. \
Determine and return the correct digit. \
If the missing digit cannot be determined (i.e., there is no solution or there is more than one solution), return `-1` instead.

### Definition

* **Class**: `FixEquation`
* **Method** : `findMissingDigit`
* **Parameters** : `String`
* **Returns** : `Integer`
* **Method signature** : `function findMissingDigit(equation)`


> Note: A digit is correct if and only if it produces a valid equation in which A, B, C and D are positive integers with no leading zeros.

### Constraints
- Equation will have the form `A * B + C = D`.
- Each of A, B, C, D will be a nonempty string of 1 to 4 characters, i.e., `1 <= length of A, B, C, D <= 4`.
- Each character in each of A, B, C, D will be either a digit ('0'-'9') or a question mark ('?').
- There will be exactly one question mark in equation.
- The numbers represented by A, B, C, D will not have leading zeros.

### Test Cases
:one: 
```
Equation: 42 * 47 + 2 = 1?76

Returns: 9

We know that 42 * 47 + 2 = 1974, so the missing digit is 9.
```

:two:
```
Equation: 4? * 47 + 2 = 1976

Returns: 2

The same equation, another missing digit.
```

:three:
```
Equation: 42 * ?7 + 2 = 1976

Returns: 4

And again the same equation.
```

:four:
```
Equation: 42 * ?47 + 2 = 1976

Returns: -1

This test case has no valid solution. The numbers cannot have leading zeros, so we cannot fill in a zero in front of 47.
```

:five:
```
Equation: 2 * 12? + 2 = 247

Returns: -1

Two times something + 2 will never be 247, so this test case has no solution either.
```
# My Solution:
- Worked around the solution with straightforward intuitive steps. 
- Handled the case where the number having a missing digit might have mismatched other digits. 
   For example, the number should be 1976 but the equation has 1?36. This should return -1.

**Solution**

*Step 1: Split into elements of operators and operands (Pre processing)*

- The given equation is split into operators and operands using the split function on space(" ").
- Now we have an array of elements having A, B, C, D on indices 0, 2, 4, 6 and the rest are operators +, * and = .

*Step 2: Determine the number that has a missing digit and produce an array of the operands*

- For knowing which of the operands have a missing digit, we run a for loop and keep pushing the operands in an array and as soon as we find a '?' we update our missingDig variable. The value of missingDig would tell us which operand has a missing digit, 0 implies A, 2 implies B and so on..
-  For every operand we keep pushing it as an Int data type to an array called operands
-  We extract the operands as A, B, C, D from the array, operands

*Step 3: Calculate the expected answer according to the number that has a missing digit*
- We have a switch case which helps us to calculate the expected value of the missing number
- If the missing digit is 0, A's value is calculated using (D - C)/B and so on..

*Step 4: Now that we know our expected value, we check for the 4 cases that can lead to no solution*
- We check if the "ans" variable is 1. negative or 2. not an integer value because these conditions cross our constraints.
- We also check if 3. the length of expected answer is different from the one given in the equation, since that would mean extra zeroes or digits
- We check 4. if the other digits apart from the missing one mismatches

*Step 5: Parse the number with missing digit*
- Simply traverse the number string and return the int data type of that character corresponding to the question mark

## Testing given test cases:
![Screenshot (417)](https://user-images.githubusercontent.com/64865136/146568886-f42a5741-4071-47b5-b68d-8f223f4dbe3f.png)

## Testing cases where other digits mismatch:
![Screenshot (416)](https://user-images.githubusercontent.com/64865136/146568957-fc0ccd9b-dc6b-4f0f-b978-03d18e5f2d4e.png)
