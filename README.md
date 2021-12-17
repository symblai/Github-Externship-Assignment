# Github Externship Assignment

## Problem statement

You are given a String equation containing an equation of the form `A * B + C = D`, where A, B, C and D are positive integers that don't have leading zeros. \
One digit in the equation is missing. \
Determine and return the correct digit. \
If the missing digit cannot be determined (i.e., there is no solution or there is more than one solution), return `-1` instead.

### Constraints
- Equation will have the form `A * B + C = D`.
- Each of A, B, C, D will be a nonempty string of 1 to 4 characters, i.e., `1 <= length of A, B, C, D <= 4`.
- Each character in each of A, B, C, D will be either a digit ('0'-'9') or a question mark ('?').
- There will be exactly one question mark in equation.
- The numbers represented by A, B, C, D will not have leading zeros.
