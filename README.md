# Github Externship Assignment

## Problem statement

You are given a String equation containing an equation of the form `A * B + C = D`, where A, B, C and D are positive integers that don't have leading zeros. \
One digit in the equation is missing. \
Determine and return the correct digit. \
If the missing digit cannot be determined (i.e., there is no solution or there is more than one solution), return `-1` instead.

### Approach

1) The main idea is to run a loop for 10 times replacing the '?' with each digit between 0-9 and testing the equation's consistency.
2) The given equation can be split into an array containing 6 elements A, *, B, +, C, =, D.
Note: Elements at indices 1, 3, 5 are irrelevant to us.
3) Next we find in the array the element with a '?' and replace it with the digit corresponding to the current iteration. For example, the number '1?76' will be '1076' in the first iteration, '1176' in the second iteration and so on until the appropriate digit is found.
4) Everytime we replace the '?' with a digit we check whether there are any leading zeroes. This can be done by checking if the first element of the string is '0' and if its length is greater than 1. If there are leading zeroes, we just skip the current iteration.
5) At each iteration, the equation A*B + C = D is verified until the correct digit is found. Else a '-1' is returned in the case when the equation has no solution.