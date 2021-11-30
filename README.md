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
