let userInput: unknown                        // different from any, while any accepts anything, unknown is currently undefined or unsure
let userName: string



userInput = 5
userInput = 'user'




if ( typeof userInput === 'string') {        // must write function to confirm typeof prior to define
  userName =  userInput
}



function generateError(message: string, code: number): never {            // intended to "never" return anything such as errors or infinite loops 
  throw { message, errorCode: code}
}

generateError('An error occured!', 500)