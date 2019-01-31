module.exports = (number) => {
    let sum = 0
    number.map(data => sum += data)
    sum = sum / number.length
    return console.log(`Sum:  `, sum)
}