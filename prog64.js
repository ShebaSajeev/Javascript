//w.a.p to print pairs where sum is 6

b = [2,3,4,5]
noPair=false
for(i=0;i<=b.length;i++){
    for(j=i+1;j<=b.length;j++){
        if(b[i]+b[j] == 6){
            noPair=true
            console.log('pairs are ',b[i] ,'and' ,b[j]);
        }
    }
}
!noPair && console.log('no pairs');