for(i=1;i<=7;i++){
    str=""
    for(j=1;j<=7;j++){
        if(i+j==8 ||  i==j || i==7 || i==1 ){
            str=str+ " *"
        }
        else{
            str=str+"  "
        }
        
    }
    console.log(str);
}
