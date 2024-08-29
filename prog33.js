//w.a.pmto find the gcd/hcf of given two numbers
///12=1,2,3,4,6,12
//28=1,2,4,7,14,28
//cf=1,2,4
//highest common factor=4

num1=12
num2=32
gcd=0
for(i=1;i<=num1;i++){
    if(num1%i==0 && num2%i==0){
        gcd=i
    }
}
console.log(gcd);
