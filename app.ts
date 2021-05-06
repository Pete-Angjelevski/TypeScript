// const person: {
//   name: string,
//   age: number
// }             // defines object properties now 
enum Role { 
  ADMIN = 1,
  READ_ONLY,
  AUTHOR
} 


const person: {
  name: string
  age: number
  hobbies: string []
  role: [number, string]  //defined as tuple
  role2: number           // defined from enum 

} = {
  name: "Pete",
  age: 30,
  hobbies: ["MMA", "Movies"],
  role: [2, 'author'],
  role2: Role.ADMIN         // use of enum 
}

person.role.push('admin')   // push is an exception to tuples 




let favouriteActivities: string []
favouriteActivities = ['Sport']


console.log(person.name) 

for( const hobby of person.hobbies) {
  console.log('Hobbies: ', hobby)
  // console.log(hobby.map()) // pre-emptively shows unabilty to map as there are no arrays to map over
}