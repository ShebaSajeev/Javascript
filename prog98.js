//multilevel inheritance

class A{
   methoda(){
    console.log('methoda');
   }
}
class B extends A{
    methodb(){
        console.log('methodb');
    }
}
class C extends B{
    methodc(){
        console.log('methodc');
    }
}
const obj= new C()
obj.methodc()
obj.methodb()
obj.methoda()