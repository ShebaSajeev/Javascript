
function display(num){
   result.value+=num 
}
function back(){
    result.value=result.value.slice(0,-1)// it removes last digit
}
function clearAll(){
    result.value=""
}
function equal(){
   try{
    result.value=eval(result.value)
   }
   catch(error){
    result.value='error'
    setTimeout(()=>{result.value=""},1000)
   }
}