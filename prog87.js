text='hai hello all hello world all'

//w.a.p to print the word count from the given string
//convert the text to array
words=text.split(' ')
console.log(words);

//create an empty object
obj={}
//fetch each word from array
for(word of words){
    //check each word is present in created object
    if(word in obj){
        obj[word]+=1           
    }
    else{
        obj[word]=1
    }
}
console.log(obj);

