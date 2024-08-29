// another form to solve prog19
//2+22  3+33+333 //4+44+444+4444

j=1
n=4

str=""
sum=0
while(j<=n){
    str=str+n
    sum=sum+Number(str)
    j++
}
console.log(sum);