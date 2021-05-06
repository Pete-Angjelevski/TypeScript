// const person: {
//   name: string,
//   age: number
// }  = {              // defines object properties now 
var person = {
    name: "Pete",
    age: 30,
    hobbies: ["MMA", "Movies"]
};
var favouriteActivities;
favouriteActivities = ['Sport'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log('Hobbies: ', hobby);
}
