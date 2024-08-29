//filter()

a=[10,12,15,30,25,2,3,5]

//w.a.p to print all even numbers

even=a.filter((num)=>num%2==0)
console.log(even);

//w.a.p to find numbers >13

b=a.filter((num)=>num>=13)
console.log(b);

//w.a.p to checkthe number>13 exist or not

c=a.some(num=>num>13)
console.log(c);