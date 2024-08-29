//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
console.log('name of employees:');
employee.forEach(emp => {console.log(emp[1]);})
console.log('---------------------------');

//print total numbers of employee
console.log('total muber of employees:');
numberOfemployee=employee.length
console.log(numberOfemployee);
console.log('---------------------------');

//print developer employee details

i=employee.filter(emp=>emp[2]=='developer').forEach(pro=>{console.log(pro);})

console.log('---------------------------');
// print details of employee Laisha
c=employee.find(emp=>emp[1]=='Laisha')
console.log(c);
console.log('---------------------------');
//print employee salary whose sarary>30000
console.log('employees with salary > 30000:');
k=employee.filter(emp=>emp[4]>=30000).forEach(pro=>{console.log(pro[1]);})
console.log('-------------------------------');
//highest salary

sal=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(sal[1]);

//total salary expense
console.log('-----------------------------------------');

exp=employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(exp);