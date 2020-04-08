# Picture Frame

Create a function that takes the **width**, **height** and **character** and returns a picture frame as a matrix.

### Examples
```shell
getFrame(4, 5, "#") ➞ [
  ["####"],
  ["#  #"],
  ["#  #"],
  ["#  #"],
  ["####"]
]
// Frame is 4 characters wide and 5 characters tall.

getFrame(10, 3, "*") ➞ [
  ["**********"],
  ["*        *"],
  ["**********"]
]
// Frame is 10 characters and wide and 3 characters tall.

getFrame(2, 5, "0") ➞ "invalid"
// Frame"s width is not more than 2.
```

### Notes
- Remember the gap.
- Return `"invalid"` if **width** or **height** is 2 *or less* (can't put anything inside).
