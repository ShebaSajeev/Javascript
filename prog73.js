//reduce()
a=[10,11,2,7,3,6,1]

//w.a.p to find the highest of tghe given array
highest=a.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest);
//w.a.p to find the lowest
lowest= a.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest);
//sum
sum=a.reduce((n1,n2)=>n1+n2)
console.log(sum);