//w.a.p to check whether the given number is prime or not

n=8
isprime=true
for(i=2;i<n;i++){//2<5//3<5
  if(n%i==0){//5%2=1//5%3=2
    isprime=false
    break
  }
  
}
console.log(isprime?'is a prime number':'it is not');