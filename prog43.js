// * * * *
//  * * *
//   * *
//    * 

for(i=1;i<=4;i++){
    str=""
    for(k=0;k<i;k++){
       str=str+" "
    }
    for(j=4;j>=i;j--){
        str=str+" * "
    }
    console.log(str);
}