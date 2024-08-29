array=[10,20,30,40,30,20,50,30,60,70,10,40,80]

//w.a.p to find the number count from the given array and display as an array
obj={}
for(each of array){
    if(each in obj){
        obj[each]+=1
    }
    else{
        obj[each]=1
    }
}
console.log(obj);