// w.a.p to check whether a num is palindrome or not
num1=123
num2=123
remainder=0 
reverse=0
console.log('the given number is',num1);
while(num2>0){
remainder= num2%10
reverse=(reverse*10)+remainder
num2=Math.floor(num2/10)
}
console.log(reverse);
if(num1==reverse){
    console.log('it is palindrome');
}
else{
    console.log('it is not');
}
console.log('------------------------');

