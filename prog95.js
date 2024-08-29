//write methods for solving the given questions

class Bank{
    accountDetails={
        1000:{acno:1000,username:'userone',password:'userone',balance:50000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{acno:1003,username:'userfour',password:'userfour',balance:5000},
        
    }

    //validate a given account number
    validate(acno){
       return acno in this.accountDetails?'valid':'invalid'
    }
    //authenticates the account
      authenticate(acno,pswd){
        if(this.validate(acno)){
            if(this.accountDetails[acno].password==pswd){
                console.log('authentication successfull');
            }
            else{
                console.log('invalid password');
            }
        }
        else{
            console.log('invalid account');
        }
      }
    //check the balance
       balance(acno,pswd){
         if(this.validate(acno)){
              if(this.accountDetails[acno].password==pswd){
                console.log(this.accountDetails[acno].balance);
              }
              else{
                console.log('invalid password');
              }
         }
         else{
            console.log('invalid account number');
         }
       }
    //fund transfer
    fund(facno,tacno,fpswd,amount){
        if(this.validate(facno) && this.validate(tacno)){
           if(this.accountDetails[facno].password==fpswd){
              if(this.accountDetails[facno].balance>=amount){
                   this.accountDetails[facno].balance-=amount
                   this.accountDetails[tacno].balance+=amount
                   console.log(this.accountDetails[facno].balance);
                   console.log(this.accountDetails[tacno].balance);
              }
              else{
                console.log('insufficient balance');
              }
           }
           else{
            console.log('invalid password');
           }
        }
        else{
            console.log('invalid');
        }
    }

}
const obj=new Bank()
console.log(obj.validate(1000));

obj.authenticate(1000,'userone')

obj.balance(1000,'userone')

obj.fund(1000,1001,'userone',100)