//Sample data with nested arrays 
const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];

 //1) Find the sum of all numbers in the nested arrays.
 sum=data.flat().reduce((a,b)=>a+b)
 console.log(sum);
console.log('------------------');
//2) Find the maximum number in the entire nested array.
highest=data.flat().reduce((a,b)=>a>b?a:b)
console.log(highest);
console.log('-------------------------------');
// Find the average of all numbers in the nested arrays.
average=data.flat().reduce((a,b)=>(a+b)/data.length)
console.log(average);
console.log('-------------------------------');

 // Find square of each number in the nested arrays.
 square=data.flat().map(a=>a**2)
 console.log(square);
 console.log('----------------------');

// Find all even numbers from the nested arrays.
even=data.flat().filter(a=>a%2==0)
console.log(even);
console.log('-----------------------');

// Use reduceRight to concatenate all nested arrays in reverse order.
concatenation= data.reduceRight((a,b) => a.concat(b),[]);
console.log(concatenation);
console.log('------------------------');
// create a flattened array from the nested arrays.
array=data.flat()
console.log(array);
console.log('-------------------');

//check if the number 5 is present in any of the nested arrays
valid=data.some(a=>a==5)
console.log(valid?'it is present':'it is not present');
console.log('-------------------------------');
// create a single string of all numbers separated by a comma. 
str=data.flat().map(a=>"'" +a+"'").join(",");
console.log(str);
console.log('---------------------------');

 // Print each number in the nested arrays.
data.flat().forEach(a=>{console.log(a);})
console.log('--------------------');
// Sort the nested arrays based on the sum of their numbers.

// Use map to get the product of the first and last number in each nested array.

// Use filter to get all arrays where the sum of numbers is greater than 15.

// Use reduce to find the product of all numbers in the nested arrays.

 // create an array of square roots of all numbers in the nested arrays.

// Use includes to check if the number 20 is present in any of the nested arrays.

// Use map to convert each number in the nested arrays to its string representation.

// Use filter to get all arrays where the length is greater than 2

// Use reduceRight to flatten and concatenate all nested arrays in reverse order.

 // Use arrayFrom to create an array of squares of all even numbers in the nested arrays.

// Sort the nested arrays based on the length of each array.

// Use map to convert each number in the nested arrays to its negative.

// Use filter to get all arrays where the last number is greater than 10.

 // Use reduceRight to get the difference between consecutive numbers in each nested array.

// Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.

 // Use includes to check if the number 15 is present in any of the nested arrays.

// Use map to convert each number in the nested arrays to its absolute value.

// Use filter to get all arrays where the first number is less than 5.

// Use reduceRight to concatenate and flatten all nested arrays in reverse order.

// Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.


