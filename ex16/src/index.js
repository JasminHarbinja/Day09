// Only change code below this line
function checkSign(num) {
    return num < 0 ? "Number is negative" : num > 0 ? "Number is positive" : "Number is zero";
}

console.log(checkSign(-3));
console.log(checkSign(0));
console.log(checkSign(3));
// Only change code above this line

module.exports = checkSign;