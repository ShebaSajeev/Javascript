// a=[10,20,30,20,30,40,50,60,10]

//w.a.p to find the duplicates
// isDuplication=false

// for(i=0;i<=a.length;i++){//0//1//2//3//4//5//6//7//8//9
//     for(j=i+1;j<a.length;j++){//1//2//3//4//5//6//7//8//9//
//          if(a[i]==a[j]){//10==20//
//              isDuplication=true
              
//             console.log(a[i]);

//         }
//     }
   
// }
// !isDuplication && console.log('no duplication');

// console.log('-------------------------------------------');

a=[10,20,30,20,30,40,50,60,10]
b = []


for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j]){
            //varable initialization
           isDuplicate = false
           //check whether the number is there in output array
           for(k=0;k<=b.length-1;k++){
                if(a[i]==b[k]){//if present number is added
                isDuplicate = true
                break
            }
           }
           if(!isDuplicate){//not present in output array then number is added to the output array
               b.push(a[i])   
           }
           
        }
    }
}

!isDuplicate?console.log(b):console.log('no duplicate');


