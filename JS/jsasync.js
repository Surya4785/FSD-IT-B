function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Registering user...');
            resolve();
        }, 5000);
    });
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Sending email...');
            resolve();
        }, 5000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Logging in...');
            resolve();
        }, 5000);
    });
}

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting user data...');
            resolve();
        }, 5000);
    });
}

function displayUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Displaying user data...');
            resolve();
        }, 5000);
    });
}
//using promise
// Promise chaining
// register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err) => {
//         console.log('Error:', err);
//     });

// console.log('call other tasks...');

//using async await
async function f1() {
    try {
        await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
    } catch (err) {
        console.log('Error:', err);
    }
}

f1();
console.log('call other tasks...');
   

//callback hell
// register(() => {
//     sendEmail(() => {
//         login(() => {
//             getUserData(() => {
//                 displayUserData();
//             });
//         });
//     });

// });

// function waitforfiveSeconds(){
//     const ms=new Date().getTime()+5000;
//     let ct=new Date().getTime();
//     while(ct<ms){
//         ct=new Date().getTime();
//         {}
//     }
// }

