const gadgets=[
    {
        id:1,name:"Smartphone",brand:"Brand A" ,price:699,features:["Touchscreen","Camera","Bluetooth","GPS"],instock:true
    },
    {
        id:2,name:"Laptop",brand:"Brand B" ,price:1199,features:["SSD","16GB RAM","Wi-Fi","HD Display"],instock:false
    },{
        id:3,name:"Smartwatch",brand:"Brand C" ,price:199,features:["Heart Rate Monitor","Bluetooth","GPS"],instock:false
    },{
        id:4,name:"Tablet",brand:"Brand D" ,price:499,features:["Touchscreen","Wi-Fi","Bluetooth","Expandable Storage"],instock:true
    },{
        id:5,name:"Wireless Earbuds" ,brand:"Brand E",price:149,features:["Bluetooth","Noise Cancelling","Water Resistant","Long Battery Life"],instock:true
    }
];
////add a new feature to laptop
//print all gadget names

for(let gadname of gadgets){
    console.log(gadname.name);
}
console.log("---------------------------");
//print all gadgets names whose price is greater than 500

for(let gadname of gadgets){
    if(gadname.price>500){
        console.log(gadname.name);
    }
}
console.log('-------------------');
//print out of stock gadgets
for(let gadname of gadgets){
    if(gadname.instock==false){
        console.log(gadname.name);
    }
}
console.log('-------------------');

//add a new feature to laptop
// for(let gadname of gadgets){
    
// }
// console.log('-------------------');

//what will be the revenue

