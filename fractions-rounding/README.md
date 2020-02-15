# Fractions and Rounding

Given a fraction `frac` (given in the format "1/2" for example) and `n` number of decimal places, return a sentence in the following format:

**"{fraction} rounded to {n} decimal places is {answer}"**

## Examples
```shell
fracRound("1/3", 5) ➞ "1/3 rounded to 5 decimal places is 0.33333"

fracRound("2/8", 4) ➞ "2/8 rounded to 4 decimal places is 0.2500"

fracRound("22/7", 2) ➞ "22/7 rounded to 2 decimal places is 3.14"
```

## Notes
- Add trailing zeros if `n` is greater than the actual number of decimal places the fraction has (see example #2).
- Numbers greater than one may be given as top-heavy fractions (no mixed numbers).
- `n` won't be 1 because that would cause *"decimal places"* to be *"decimal place"*, making the challenge more cumbersome than it needs to be.
