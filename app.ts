// const person: {
//   name: string,
//   age: number
// }  = {              // defines object properties now 

const person: {
  name: string,
  age: number,
  hobbies: string []
  role: [number, string]  //defined as tuple
} = {
  name: "Pete",
  age: 30,
  hobbies: ["MMA", "Movies"],
  role: [2, 'author']
}

person.role.push('admin')   // push is an exception to tuples 




let favouriteActivities: string []
favouriteActivities = ['Sport']


console.log(person.name) 

for( const hobby of person.hobbies) {
  console.log('Hobbies: ', hobby)
  console.log(hobby.map()) // pre-emptively shows unabilty to map as there are no arrays to map over
}