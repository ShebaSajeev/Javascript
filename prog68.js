//w.a.p to print common numbers in an arrray

p=[10,11,12,20,30]
q=[11,20,25,30,33]

x=0// index for p
y=0//index for q
isPresent=false
while(x<p.length && y<q.length){
    if(p[x]==q[y]){
        console.log(p[x]);
        isPresent=true
        x++
        y++
    }
    else if(p[x]>q[y]){
        y++
    }
    else{
        x++
    }
}
!isPresent && console.log('no common');

