//find()
fruits=['apple','pineapple','mango','orange','kiwi']
//find mango from array
mango=fruits.find(f=>f=='mango')
console.log(mango);

//is mango present in array

b=fruits.includes('mango')
console.log(b?'yes':'no');

//find index of mango

i=fruits.indexOf('mango')
console.log(i);