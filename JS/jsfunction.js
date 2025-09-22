//Normal function
// function hello(user="Guest"){
//     console.log('Hello $(user)');
    
// }
// hello('Vijay');
// hello();
// function add(a,b){
//     console.log('Before return');
//     return a+b;
//     console.log('After return'); // unreachable code
    
// }
// console.log('Sum is:',add(10,20));
// console.log(add());

//Arrow function

const hello = (user = "Guest") => `Hello ${user}`;
console.log(hello('Vijay'));
const add=(a,b)=>a+b;
console.log(add(10,20));
console.log(add());

//IIFE - Immediately Invoked Function Expression
(function(){
    console.log('IIFE executed');
})();

//callback function
function greet(user,callback){
    console.log(`Hello ${user}`);
    callback();
}
greet('Vijay', ()=> {
    console.log(add(15,201));
});
