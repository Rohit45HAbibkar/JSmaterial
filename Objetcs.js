//singleton-> constructor se bana tho singleton->  Object.create
//object literals

const jsUser={
    name:"John",
    age:30,
    location:"pune",
    email:"rohit@gmail.com",
    isLoggedin:false,
    lastlogin:["monday","saturday"]
}

//1
console.log(jsUser["age"]);
//2
console.log(jsUser.age);

// for symbol
// [mysym]:"mykey",

//override value
jsUser.age=20;
console.log(jsUser.age);

//
jsUser.greeting=function(){
    console.log(`hwllo ${this.location}`);
}
console.log(jsUser.greeting());

