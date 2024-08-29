pattern='ABCBBCAACB'
//w.a.p to find the first recursive letter

a=Array.from(pattern)
// console.log(a);
obj={}
for(char of a){
    if(char in obj){
        console.log(char);
        break
    }
    else{
        obj[char]=1
    }
}