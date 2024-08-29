//method overloading  -rest operator
class A{
    methoda(...arg){
        console.log(arg);
        //sum
        console.log(arg.reduce((n1,n2)=>n1+n2));
    }
}
const obj=new A()
obj.methoda(5,23,2)