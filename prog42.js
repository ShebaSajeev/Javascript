//    *
//   * *
//  * * *
// * * * *

for(i=1;i<=4;i++){
    str=""
    for(k=4;k>i;k--){
        str=str+" "
    }
    
    for(j=1;j<=i;j++){
        str=str+"* "
    }
    console.log(str);
}