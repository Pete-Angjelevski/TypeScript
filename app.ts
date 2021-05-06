// const person: {
//   name: string,
//   age: number
// }  = {              // defines object properties now 

const person = {
  name: "Pete",
  age: 30,
  hobbies: ["MMA", "Movies"]
}

let favouriteActivities: string []
favouriteActivities = ['Sport']


console.log(person.name) 

for( const hobby of person.hobbies) {
  console.log('Hobbies: ', hobby)
  console.log(hobby.map()) // pre-emptively shows unabilty to map as there are no arrays to map over
}