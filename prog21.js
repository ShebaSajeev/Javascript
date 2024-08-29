// w.a.p to find the reverese of the num
num=123
remainder=0
reverse=0
console.log(num);
while(num>0){
    remainder=num%10//3 //12%10=2 //1%10=1
    reverse=(reverse*10)+remainder//0+3=3 //3*10+3=32 //1
    num =  Math.floor(num/10)//12//1
}
console.log(reverse);