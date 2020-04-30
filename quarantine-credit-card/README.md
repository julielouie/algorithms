# Quarantine Credit Card

You've been quarantined and have become addicted to online shopping and start hoarding ramen. Much to your surprise, you discover that your favorite online marketplace is not secure and displays your credit card details in plain text. Being the good samaritan that you are, you decide to write a function for them that takes in a credit card number and returns a string that replaces all but the last four digits with stars, like this: `"************1111"`. Make sure that the number of stars matches with the exact number of digits being replaced.

### Example 1:
```shell
Input: card = 1234567891234567
Output: ************4567
```

### Example 2:
```shell
Input: card = 9857 4565 1354 8916
Output: ************8916
```

### Example 3:
```shell
Input: card = 9780-2381-4927-4590
Output: ************4590
```
