# Github Externship Assignment Submission

## Problem statement

You are given a String equation containing an equation of the form `A * B + C = D`, where A, B, C and D are positive integers that don't have leading zeros. \
One digit in the equation is missing. \
Determine and return the correct digit. \
If the missing digit cannot be determined (i.e., there is no solution or there is more than one solution), return `-1` instead.

### My Approach

* **Step - 1**: `Firstly, we split the given String equation.`
* **Step - 2** : `Then find the question-mark/missing-digit in the equation.`
* **Step - 3** : `Use if-else statements to get the switch case arguments.`
* **Step - 4** : `Checking the length of the value & given input string. If its equal, return the digit placed at index of '?' else return '-1'.`
* **Step - 5** : `Checking all given test cases.'.`


### Test Cases
:one: 
```
Equation: 42 * 47 + 2 = 1?76

Returns: 9

```

:two:
```
Equation: 4? * 47 + 2 = 1976

Returns: 2

```

:three:
```
Equation: 42 * ?7 + 2 = 1976

Returns: 4

```

:four:
```
Equation: 42 * ?47 + 2 = 1976

Returns: -1

```

:five:
```
Equation: 2 * 12? + 2 = 247

Returns: -1

```