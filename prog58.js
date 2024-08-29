//array

weekdays = ['mon','tue','wed','thur']
console.log(weekdays);
//total number if items
console.log(weekdays.length);

//print wed from array

console.log(weekdays[2]);
console.log(weekdays[3]);
console.log(weekdays[0]);

// add friday to array

weekdays.push('fri')
console.log(weekdays);

weekdays.push('3')
console.log(weekdays);
console.log('--------------------------');
// remove from array

weekdays.pop()
console.log(weekdays);

console.log('--------------------------------------');

weekdays.unshift('sun')
console.log(weekdays);

console.log('-----------------------------------------------------');
weekdays.unshift('1')
console.log(weekdays);

weekdays.shift()
console.log(weekdays);