let user={
    name:"rohit habibkar",
    price:233,
}

const handle=(anyobject)=>{
   console.log(`${anyobject.name} is pro coder his value is ${anyobject.price}`);
   
}

handle(user);

// scope 
console.log(addone(1));

function addone(num){
    return num+1;
}


//syntax by veriable
let ok=function(nums){
    return nums;
}

console.log(ok(3));
