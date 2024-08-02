const user={
    username:"hitesh",
    price:999,
    welcome:function(){
        console.log(`${this.username} is my name`);
        
    }
    
   
}

user.welcome()

user.username="anil"
user.welcome()

//arrow function
//this cnnot ne used in the function

const addTwo=(num1,nums2)=>({username:"hitesh"})

console.log(addTwo(3,3));

(function chai(){
console.log("c");

})();

( (name)=>{
    console.log(`${name}`);
    
    })('dsdsd');





