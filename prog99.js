//polymorphism

//method overloading
class A{
    methoda(){
        console.log('hi');
    }
    methoda(n){
        this.n1=n
        console.log(`inside ${this.n1}`);
    }
    methoda(n,m){
        console.log(`indise ${n} and ${m}`);
    }
}
const obj=new A()
obj.methoda(5)