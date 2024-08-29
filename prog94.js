class Students{
    stuName
    stuId
    stuloc
    stuSub

    constructor(sname,sid,sloc,ssub){
        this.stuName=sname
        this.stuId=sid
        this.stuloc=sloc
        this.stuSub=ssub
    }

    call(){
        console.log(`id is ${this.stuId}`);
    }
}
const obj=new Students('sheba',1,'tvm','english')
obj.call()

const obj1=new Students('sara',2,'kochi','maths')
obj1.call()