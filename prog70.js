//nested array
a=[[2,10],[50,25],[2,100],[7,66],[33,9]]
//w.a.p to find the number less than or equal to 10

for(let num of a){
    for(let n of num){
        if(n<=10){
            console.log(n);
        }
    }
}
//find even number
console.log('--------------------------------------------');
for(let x of a){
    for(let y of x){
        if(y%2==0){
            console.log(y);
        }
    }
}
//diff method to find 
console.log('--------------------------------------');
b=a.flat()
console.log(b);
for(let c of b){
    if(c%2==0){
        console.log(c);
    }
}