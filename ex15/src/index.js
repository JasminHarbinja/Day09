// Only change code below this line
function myDoWhile() {
    var myNumbers = "0";
    var i = 1;
    do {
        myNumbers = myNumbers + "," + i;
        i++;
    } while (i < 10);
    return myNumbers;
}

console.log(myDoWhile());
// Only change code above this line



module.exports = myDoWhile;