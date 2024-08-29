//1
//0 1
//1 0 1
//0 1 0 1

for(i=1;i<=4;i++){
    str=""
    for(j=1;j<=i;j++){
        if(i==j || i-j==2){
            str=str+ 1+ " "
        }
        else{
            str=str+ 0+ " "
        }
    }
    console.log(str);
}

//another way

// if((i+j)%2==0){
//     str=str+1
//  }