// * * * * *
//   *   *
//     *
//   *   *
// * * * * *

for(i=1;i<=5;i++){
    str=""
    for(j=1;j<=5;j++){
    if(i==1 || i==5 || i+j==6|| i==j){
        str=str+ "*"
    }
    else{
        str=str+" "
    }
    
}
console.log(str);
}