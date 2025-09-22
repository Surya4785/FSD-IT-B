function register(){
    waitforfiveSeconds();
    console.log('Registering user...');
    
}
function sendEmail(){
    waitforfiveSeconds
    console.log('Sending email...');    
}
function login(){
    waitforfiveSeconds
    console.log('Logging in...');    
}
function getUserData(){
    waitforfiveSeconds
    console.log('Getting user data...');    
}
function displayUserData(){
    waitforfiveSeconds
    console.log('Displaying user data...');    
}
register();
sendEmail();
login();        
getUserData();
displayUserData();
console.log('call other tasks...');
function waitforfiveSeconds(){
    const ms=new Date().getTime()+5000;
    let ct=new Date().getTime();
    while(ct<ms){
        ct=new Date().getTime();
        {}
    }
}
