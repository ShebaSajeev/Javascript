//slice

a=[11,12,13,14,15,16,17,18,19,20]

console.log(a);
//create an array consisting first 3 item from array

b=a.slice(0,3)
console.log(b);

//create a new array having the number 14,15,16,17
console.log('---------------------');
c=a.slice(3,7)
console.log(c);

//create a new array having 18,19,20
console.log('------------------------------');
d=a.slice(7)
console.log(d);