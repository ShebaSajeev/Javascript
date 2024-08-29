//w.a.p to check whether the number is armstrong or not

num=370

temp=num
remainder=0
sum=0
n=(num+'').length// to find no. of digits

while(temp>0){//370
    remainder=temp%10//370%10=0//37%10=7
    armstrong=remainder**n//0**3=0//7**3=343
    sum=sum+armstrong//0+0//0+343=343
    temp=Math.floor(temp/10)//370/10=37//3/10=3
    
}
console.log(sum);

if(num==sum){
    console.log('it is armstrong');
}
else{
    console.log('it is not');
}