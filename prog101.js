//overriding
class A{
    methoda(){
        console.log('inside first');
    }
}
class B{
    methoda(){
        console.log('inside second');
    }
    methoda(){
        console.log('inside third');// last written will print in  overrriding
    }
}
const obj=new B()
obj.methoda()