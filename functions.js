"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
var combineValues; // we are defining that expected variable will be defined in the future with function with 2 number parameters that returns number
combineValues = add; // if not defined during let then future reassignment of variable will carry 'any' type
// combineValues = printResult                        complains as not defined as per above
console.log(combineValues(10, 10));
addAndHandle(10, 10, function (result) {
    console.log(result);
});
