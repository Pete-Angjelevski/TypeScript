"use strict";
var userInput; // different from any, while any accepts anything, unknown is currently undefined or unsure
var userName;
userInput = 5;
userInput = 'user';
if (typeof userInput === 'string') { // must write function to confirm typeof prior to define
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
