//w.a.p to check whether the given number is prime between 1-50

for(num=2;num<=50;num++){//2
    count=0//0
    for(i=2;i<num;i++){//
        if(num%i==0){
            count=count+1
        }
    }
    if(count==0){
        console.log(num);
    }
    
}
