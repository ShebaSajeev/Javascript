//nested function
// can be accessed in both parent and child
const global ='global'

const parent = ()=>{
    //can be accessed inside child
    let parentVariable ='Parent'
    console.log(`parent vareiable is ${parentVariable}`);
    const child = ()=>{
        //cannot be accessed inside parent 
        let childVariable ='CHILD'
        console.log(`child variable is ${childVariable}`);
    }
    child()
}
parent()