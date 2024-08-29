//             11
//          12 13 14
//       15 16 17 18 19
//    20 21 22 23 24 25 26
// 27 28 29 30 31 32 33 34 35
n=11
for(i=1;i<=5;i++){
    str=""
    //k for space
    for(k=1;k<=5-i;k++){
        str=str+"   "
    }
    for(j=1;j<=(2*i-1);j++){
        
        str=str+n+" "
        n++
    }
    console.log(str);
}