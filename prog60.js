expense = [12000,24000,35000, 10000,54000,40000]
//find the lowest expense
//find the highest expense
//find total
lowest = expense[0]
for(let num of expense){
    if(num<=lowest){
        lowest=num
    }
}
console.log(lowest);
console.log('------------------------------------');

highest = expense[0]//12
for(let num of expense){//12//24//35//10//54//40
    if(num>=highest){//12>=12//
        highest=num//12
    }
}
console.log(highest);
console.log('-------------------------------------');

sum=0
for(let num of expense){
    sum=sum+num
}
console.log(sum);
