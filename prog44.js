//    *
//   * *
//  * * *
// * * * *
//* * * * *
// * * * *
//  * * *
//   * *
//    * 

for(i=1;i<=5;i++){
    str=""
    for(k=5;k>i;k--){
        str=str+" "
    }
    for(j=1;j<=i;j++){
        str=str+"* "
    }
    console.log(str);
}
for(i=1;i<=4;i++){
    str=""
    for(k=0;k<i;k++){
        str=str+" "
    }
    for(j=4;j>=i;j--){
        str=str+"* "
    }
    console.log(str);
}

console.log('---------------------');

for(i=1;i<=10;i++){
    str=""
    if(i<5){
        for(spa=5;spa>i;spa--){
            str+=" "
        }
        for(j=1;j<=i;j++){
            str+=" *"
        }
    }
    else{
        for(spa=6;spa<=i;spa++){
            str+=" "
        }
        for(j=10;j>i;j--){
            str+=" *"
        }
    }
    console.log(str);
}