//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log('name of all products:');
a=products.map(pro=>pro[1]).forEach(prod=>{console.log(prod);})
console.log('-----------------------------------------');
//2. display product whose price < Rs.50
console.log('product whose price < Rs.50');
products.filter(prod=>prod[2]<50).forEach(item=>{console.log(item[1]);})
console.log('-------------------------');
//3. print price of oreo
products.filter(pro=>pro[1]=='oreo').forEach(item=>{console.log(item[2]);})
console.log('------------------------------');
//4. print costly product name
costly=products.reduce((pro1,pro2)=>pro1[2]>pro2[2]?pro1:pro2)
console.log(costly[1]);
//5. display out of stock product
console.log('-----------------------------');
products.filter(pro=>pro[3]==0).forEach(item=>{console.log(item[1]);})
console.log('-----------------------');
//6. sort products based on stock in decsending order
products.sort((n1,n2)=>n2[3]-n1[3]).forEach(item=>{console.log(item[1]);})
console.log('----------------------------');
//7. print product having maximum available stock
max=products.reduce((n1,n2)=>n1[3]>n2[3]?n1:n2)
console.log(max[1]);
console.log('-------------------------------------');
//8. is there any product can be purchased by Rs. 10
q=products.some(pro=>pro[2]<=10)
console.log(q);


//9. Is there any product in the range of 10 to 30
r=products.some(pro=>pro[2]>10 && pro[2]<30)
console.log(r);
//10. print all products in the range of 10 to 30
products.filter(pro=>pro[2]>10 && pro[2]<30).forEach(item=>{console.log(item[1]);})