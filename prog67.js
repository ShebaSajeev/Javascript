arr=[10,11,12,3,2,4]

// w.a.p to check whether 2 is present or not

//algorithm

//get the search item
searchItem=2
//initialize lower and upper index
low=0
up=arr.length-1
isPresent=false
// sort the given array
arr.sort((n1,n2)=>n1-n2)
console.log(arr);

//repeat the above staement until the low and up value meets

while(low<=up){//mid-low+up/2
    mid=Math.floor((low+up)/2)
    //-mid==searchItem
//     found 
       if(arr[mid] == searchItem){
        isPresent=true
        break
       }
//mid>search
//    up= mid-1
    else if(arr[mid]>searchItem){
        up=mid-1
    }
//mid<search
//   low=  mid+1

    else{
        low=mid+1
    }
} 
console.log(isPresent?'present':'notpresent');




