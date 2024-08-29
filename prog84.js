sentence='good morning all'
//w.a.p to print all vowels in the given sentence

vowels=['a','e','i','o','u','A','E','I','O','U']
character=sentence.split('')
console.log(character);

for(let char of character){
    if(vowels.includes(char)){
        console.log(char);
    }
}
console.log('-------------------------------------');

//another method
