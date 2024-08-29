//[id, name, designation, location, salary, experience]

 //   [1000,'Neel','developer','kochi',25000,3]
 //oops
 class Employee{
    //property
    empName
    empDesig
    empLocation
    empSalary
    //constructor
    constructor(ename,edesig,emplo,empsal){
        this.empName=ename
        this.empDesig=edesig
        this.empLocation=emplo
        this.empSalary=empsal
    }
    //methods
    //functionname(){}
    display(){
        console.log(`emapolyee name is ${this.empName}`);
    }
 }
//object
const obj=new Employee('neel','developer','kochi',25000)
obj.display()