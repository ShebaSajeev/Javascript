//Write a JavaScript program that returns a subset of a string.
//Sample Data: dog
//Expected Output: ["d", "do", "dog", "o", "og", "g"]
str='four'
substring=[]
for(i=0;i<str.length;i++){
    for(j=i+1;j<=str.length;j++){
        substring.push(str.slice(i,j))
    }
}
console.log(substring);