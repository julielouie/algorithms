# Enough Change

Having no coffee left in the house, you run out to grab some, hastily leaving your wallet behind. You come to this realization after the barista hands over your Ristretto, and pull out some loose change from your pocket. Embarrassed, you go home empty-handed and start on a function to save you next time.

Your function will accept a `total amount due` and an `array` that represents the change in your pocket, and holds values in this order: `[pennies, nickels, dimes, quarters]`.

For example, if you provide this array: `[1,2,3,4]`, it means that the contents in your pocket consist of one penny, two nickels, three dimes, and four quarters. If you have enough change to cover your order, the function will return `true`. Otherwise, it'll return `false`. Good luck!

### Example 1:
```shell
Input: total = 34.51, change = [1,2,3,4]
Output: false
```

### Example 2:
```shell
Input: total = 2.45, change = [1, 5, 2, 10]
Output: true
```
