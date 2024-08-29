//call back funxtion

function greet(name,callback){
    console.log(`hai ${name}`);
    callback()
}

function callme(){
    console.log(`iam a call back function`);
}
greet('peter',callme)

console.log('--------------------------');

setTimeout(()=>{
    console.log('hello');
},5000)// this 5000 will be print after 5s