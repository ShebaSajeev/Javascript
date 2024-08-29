class Landing{
    database={
        Milan:{Username:'Milan',Password:'milan123'},
        Manu:{Username:'Manu',Password:'manu123'},
        Mila:{Username:'Mila',Password:'mila123'}
    }
    saveData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database))
        }
    }
    // to get data
    getData(){
        this.database=JSON.parse(localStorage.getItem("database"))
        // console.log(this.database);
    }
    register(){
        this.getData
        let user=reguser.value
        let pswd=regpswd.value
        // console.log(user,pswd);
        if(user=="" || pswd==""){
            alert('please fill the form completly')
        }
        else{
            if(user in this.database){
                alert('user already exist')
            }
            else{
                this.database[user]={Username:user,Password:pswd}
                alert('user added successfully')
                this.saveData()
                //to navigate to login page
                window.location='login.html'
            }
        }


    }
    //login
    login(){
        let user1=loguser.value
        let pswd1=logpswd.value
        console.log(user1,pswd1);

        this.getData()
        if(user1=="" || pswd1==""){
            alert("please fill the form completly")
        }
        else{
            if(user1 in this.database){
               if(this.database[user1].Password==pswd1){
                     alert("Login successful")
                     localStorage.setItem("user",user1)
                     //navigate to homepage
                     window.location='home.html'
               }
               else{
                alert('invalid username or password')
               }
            }
            else{
                alert("Account doesn't exist")
            }
        }
    }
}
//create object
const obj=new Landing
// obj.saveData()

obj.getData()