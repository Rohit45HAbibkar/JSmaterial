
//singleto object
const tinderUser=new Object();

//non singleton Object
const tinder={};
console.log(tinder);
console.log(tinderUser);


const anil={
    name:"anil",
    age:25,
    address:{
        street:"street1",
        city:"city1",
        "state":"state1"
        }
}

console.log(anil.address.city);

const ob1={1:"a",2:"b"}
const ob2={3:"a",4:"r"}

const obj3={...ob1,...ob2};
console.log(obj3);

console.log(Object.keys(anil));
console.log(Object.values(anil));
console.log(Object.entries(anil));






