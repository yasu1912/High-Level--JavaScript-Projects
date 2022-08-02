/*Change for to default submit settings*/
function submitForm(event){
    event.preventDefault();
  }
/****** Veriable definition *******/

let username =document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let passwordCheck = document.querySelector("#password-check");
let usernameLogin = document.querySelector("#username-login");
let passwordLogin = document.querySelector("#password-login");
let information ={}

/************************************** SİGN UP control function ************************************************/
function signUp() {
    
    /*Error for SİGN UP*/
    function signupError(){
    


        //Error for username (if username has a short character or empty, browser will read this block)
        function usernameError() { 
            if(username.value.length<6 || username.value.length>10){
            username.style.backgroundColor="rgba(255, 0, 0, 0.1)";
            username.style.border="1px solid red";
            document.querySelector("#wrong-1").style.display="inline"} 
            else{return(true)}
        }
        
        //Error for email (if email has a empty, browser will read this block)
        function emailError() {  
            if(email.value.length<=0){
            email.style.backgroundColor="rgba(255, 0, 0, 0.1)";
            email.style.border="1px solid red";
            document.querySelector("#wrong-2").style.display="inline"} 
            else{return(true)}
        }
        
        
        //Check for if email include character (if email hasn't  include "@" character, browser will read this block)
        let newEmail=JSON.stringify(email.value);
        function emailCheck(){
            if (newEmail.includes("@")==false){
            email.style.backgroundColor="rgba(255, 0, 0, 0.1)";
            email.style.border="1px solid red";
            document.querySelector("#wrong-email").style.display="inline"
            return(false)}
            else{return(true)}
        }
        
        
        //Error for password (if password has a short character or empty, browser will read this block)
        function passwordError() {  
            if(password.value.length<=8){
            password.style.backgroundColor="rgba(255, 0, 0, 0.1)";
            password.style.border="1px solid red";
            document.querySelector("#wrong-3").style.display="inline"} 
            else{return(true)}
        }
        
        //Error for passwordCheck (if password has a short character or empty, browser will read this block)
        function passwordCheckError() {  
            if(passwordCheck.value.length<=8){
            passwordCheck.style.backgroundColor="rgba(255, 0, 0, 0.1)";
            passwordCheck.style.border="1px solid red";
            document.querySelector("#wrong-4").style.display="inline"}   
            else{return(true)}
        }
        
        //condition code ---------------------> (if everything true) => set SignUpError function = "true" ; (if not) => set function = "false"
        if (usernameError()==true && emailError()==true && emailCheck()==true && passwordError()==true && passwordCheckError()==true){
            return(true)}
        else{return(false)}
    }
    



    
    /*Check for password same*/    
    if (password.value!=passwordCheck.value){
    document.querySelector(".not-correct").style.display="inline-block"
    passwordCheck.style.backgroundColor="rgba(255, 0, 0, 0.1)";
    passwordCheck.style.border="1px solid red";
    document.querySelector("#wrong-4").style.display="inline"
    }
    
    
    /*if password is same and functions okey, change information to string and send to local storage*/
    if(password.value==passwordCheck.value && signupError()==true){
        document.querySelector(".done").style.display="inline-block"
        information={username:username.value,email:email.value,password:password.value}
        localStorage.setItem("saveObject",JSON.stringify(information))
    }
    }


/************************************** LOGİN control function ************************************************/
function loginEvent(){
    
    //changing operation for item from getting local storage
    let loginİnformation=localStorage.getItem("saveObject")
    loginİnformation= JSON.parse(loginİnformation)
    
    
    /*Error for login*/
    function loginError (){
        
        
        
        //Error for login username (if login username input has a short character or empty,browser will read this block)
        function usernameLoginError() {  
        if (usernameLogin.value.length<=0){
            usernameLogin.style.backgroundColor="rgba(255, 0, 0, 0.1)";
            usernameLogin.style.border="1px solid red";
            document.querySelector("#wrong-5").style.display="inline-block"}
        else{return(true)}}
        
        
        
        //Error for login password (if login password input has a short character or empty,browser will read this block)
        function passwordLoginError() { 
        if (passwordLogin.value.length<=0){
            passwordLogin.style.backgroundColor="rgba(255, 0, 0, 0.1)";
            passwordLogin.style.border="1px solid red";
            document.querySelector("#wrong-6").style.display="inline-block"}
        else{return(true)}  
        }
    
    
    //check the functions and set loginError function like true or false 
    if (usernameLoginError()==true && passwordLoginError()==true){
        return(true)}
    }
    
    
    /*İf loginError function is true , username and password is true -->>> create a successful login div // if not, change the error div display to inline-block  */
    if(loginError()==true && usernameLogin.value==loginİnformation["username"] && passwordLogin.value==loginİnformation["password"]){
        document.querySelector(".header").innerHTML=`<h3><i class="bi bi-patch-check-fill"></i> (${loginİnformation["username"]})  You have successfully logged in.  <i class="bi bi-patch-check-fill"></i></h3>`
        document.querySelector(".header").style="color:green;text-align:center;font-size:2rem;display:flex;position:relative;margin:0 auto;justify-content:center;align-self:center;width:60%;background-color:white;border-radius:20px"
        document.querySelector(".header h3").style="margin:9px auto;"
    }
    else{
        document.querySelector("#wrong-login").style.display="inline-block"
    }}

/**************************************************CLEAT FUNCTİONS**************************************************/



/*CLEAR FUNCTİON FOR SİGN UP İNPUTS*/
function clearSignup() {
    username.style.backgroundColor=""
    username.style.border=""
    email.style.backgroundColor=""
    email.style.border=""
    password.style.backgroundColor=""
    password.style.border=""
    passwordCheck.style.backgroundColor=""
    passwordCheck.style.border=""
    document.querySelector("#wrong-1").style.display="none"
    document.querySelector("#wrong-2").style.display="none"
    document.querySelector("#wrong-email").style.display="none"
    document.querySelector("#wrong-3").style.display="none"
    document.querySelector("#wrong-4").style.display="none"
    document.querySelector(".not-correct").style.display="none"
    document.querySelector(".done").style.display="none"
    document.querySelector(".header").style.display="none"
 }

 

/*CLEAR FUNCTİON FOR LOGİN İNPUTS*/
function clearLogin() {
    usernameLogin.style.backgroundColor=""
    usernameLogin.style.border=""
    passwordLogin.style.backgroundColor=""
    passwordLogin.style.border=""
    document.querySelector("#wrong-5").style.display="none"
    document.querySelector("#wrong-6").style.display="none"
    document.querySelector("#wrong-login").style.display="none"
    document.querySelector(".header").style.display="none"

}