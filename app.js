// const person: {
//   name: string,
//   age: number
// }             // defines object properties now 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Pete",
    age: 30,
    hobbies: ["MMA", "Movies"],
    role: [2, 'author'],
    role2: Role.ADMIN
};
person.role.push('admin'); // push is an exception to tuples 
var favouriteActivities;
favouriteActivities = ['Sport'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log('Hobbies: ', hobby);
    // console.log(hobby.map()) // pre-emptively shows unabilty to map as there are no arrays to map over
}
