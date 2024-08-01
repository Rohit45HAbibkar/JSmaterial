const arr=[1,2,3,4,5,6];
console.log(arr);
const arr1=new Array(1,2,3,4);

arr.push(7);
console.log(arr)
arr.pop();
console.log(arr.includes(1));
console.log(arr.indexOf(1));

const r=arr.join();
console.log(typeof r);

//slice splice

console.log("A ");

const o=[1,2,3,4,[4,5,6],[12,[323,[34]]]];

console.log(o.flat(Infinity));

console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));





