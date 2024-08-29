arr=[10,11,12,3,2,4]

// w.a.p to check whether 2 is present or not

for(let num of arr){
    isPresent=false
    if(num==2){
        isPresent=true
    }
    break
}
console.log(isPresent?'present':'not present');
