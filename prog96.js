//inheritance

class Parent{
    bike(){
        console.log('it is a new one');
    }
}
class Child extends Parent{

}
const obj= new Child()
obj.bike()