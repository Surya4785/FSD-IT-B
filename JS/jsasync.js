function register(cb){
    setTimeout(()=>{
       console.log('register end');
       cb();
    },5000)
    
}
function sendEmail(cb){
     setTimeout(()=>{
       console.log('send email end');
       cb();
    },3000)
    
}
function login(cb){
    setTimeout(()=>{
       console.log('login end');
       cb();
    },1000)
    
}
function getData(cb){
    setTimeout(()=>{
        console.log('get data end');
        cb();
    },2000)
   
}
function displayData(){
     setTimeout(()=>{
        console.log('display Data End')
    },4000)
    
}

//callback 

register(()=>{
           sendEmail(()=>{
                      login(()=>{
                            getData(()=>{
                                displayData();
                            });
                      });
           });
});

console.log('call other application');