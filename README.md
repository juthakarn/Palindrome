# Palindrome by 5635512142

```
const CheckPalindrome = (str) => {
    let reverseStr = str.split('') 
    reverseStr = reverseStr.reverse()
    reverseStr = reverseStr.join('') 

    if (str === reverseStr) {
        return console.log('sensitive')
    }
    return console.log('non sensitive')
}
```
# How to run
```
input=banana node index.js
```