a=[10,11,12,13,14,15]
//w.a.p to find the square of each elements
sq=a.map(num=>num**2)
console.log(sq);

//foreach
a.forEach(num=>{
    console.log(num**2);
})

//w.a.p to find the cube of a given number using map

y=a.map(num=>num**3)
console.log(y);

//w.a.p to create a new array with number<13 increment by1 and number>13 decrement by 1
//op=[11,12,13,14,13,14]
b= a.map(num=>num<=13?num+1:num-1)
console.log(b);

