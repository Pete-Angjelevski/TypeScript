"use strict";
function combine(input1, // union types 
input2, // use of combined union variable  
resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') { // if i type resultConverstion === 'as-num' will provide error
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return Number(result)
    // } else {
    //   return result.toString()
    // }
}
console.log(combine('pete', 'claudia', 'as-text'));
console.log(combine(10, 1, 'as-number'));
console.log(combine('10', '10', 'as-number'));
