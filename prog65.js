//w.a.p to print common numbers in an arrray

p=[10,11,12,20,30]
q=[11,20,25,30,33]
same=false
for(i=0;i<=p.length-1;i++){
    for(j=0;j<=q.length-1;j++){
        if(p[i]==q[j]){
            same=true
            console.log(p[i]);
        }
    }
}
!same && console.log('no same numbers');