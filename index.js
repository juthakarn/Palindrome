const CheckPalindrome = (str) => {
    // 1. str reverse -> reverseStr
    // 2. compare str reverse
    // 2.1 if equals ->sensitive
    // 2.2 if not eq -> non
    // str = 'banana'

    let reverseStr = str.split('') // ['b','a','n','a','n','a']
    reverseStr = reverseStr.reverse() // ['a','n','a','n','a','b']
    reverseStr = reverseStr.join('') // ananab

    if (str === reverseStr) {
        return console.log('sensitive')
    }
    return console.log('non sensitive')
}
const input = process.env.input
CheckPalindrome(input)