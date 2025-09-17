function register(){
    setTimeout(() =>{
        console.log('register end...');
    },5000);
}
function sendEmail(){
   setTimeout(() =>{
        console.log('send email...');
    },5000);
}
function login(){
    setTimeout(() =>{
        console.log('log in...');
    },5000);
}
function getUserData(){
    setTimeout(() =>{
        console.log('get user data...');
    },5000);
}
function displayData(){
    setTimeout(() =>{
        console.log('display data...');
    },5000);
}

function waitForFiveSeconds(){
    const ms=new Date().getTime()+5000;
    let ct=new Date().getTime();
    while(ct<ms){
        ct=new Date().getTime();
        {}
    }
}

register();
sendEmail();
login();
getUserData();
displayData();