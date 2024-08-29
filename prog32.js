//w.a.p to find all armstrong numbers between 8-500

for(i=8;i<=500;i++){
    //to get no. of digits
    power=(i+"").length
    temp=i
    sum=0
    remainder=0
    if(power!=1){
        while(temp>0){
        remainder=temp%10
        sum=sum+(remainder**power)
        temp=Math.floor(temp/10)
        }
    }
    else{
        sum=0
    }
    if(sum==i){
        console.log(i);
    }
}