//object

students={
    id:1,
    name:'sheba',
    age:23,
    place:'tvm'
}
console.log(students);
//display the name

console.log(students.name);
//or
console.log(students['name']);

//for access index or key

for(let key in students){
    console.log(key);
}
//w.a.p to print yes if gender is present or not
console.log(('gender'in students)?'yes':'no');

console.log(('gender'in students)?'yes':students['gender']='male');
//how to add

students['gender']='male'
console.log(students);
//how to update a value

students.age+=5
console.log(students);

//how to delete a key

//delete method-returns boolean
delete students.age
console.log(students);
