function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('result: ' + num);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(10, 10));
