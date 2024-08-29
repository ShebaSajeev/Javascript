//sort

arr=[2,3,1,,10,11,12,6,100]
//ascending

a=arr.sort((n1,n2)=>n1-n2)
console.log(a);

//descending
b=arr.sort((n1,n2)=>n2-n1)
console.log(b);