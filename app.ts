function add (n1: number, n2: number): number  {      // can infer expected return type by defining after parameters
  return n1 + n2
}


function printResult (num: number): void {            // console.log() has return type void - void means does not have return 
  console.log('result: ' + num)
}



printResult(add(5,12))


let combineValues: (a: number, b: number) => number   // we are defining that expected variable will be defined in the future with function with 2 number parameters that returns number

combineValues = add                                   // if not defined during let then future reassignment of variable will carry 'any' type

// combineValues = printResult                        complains as not defined as per above


console.log(combineValues(10, 10))