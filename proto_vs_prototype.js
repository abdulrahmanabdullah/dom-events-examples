// primitive type 
// String, number , boolean, null, undefinde , symbol, bigint. 
let name = "John Doe";
let name2 = name;
name = "Abdulrahman";
console.log(name2);

let arr1 = [1,2,4];
let arr2 = arr1 ;
arr1.push(10);
console.log(arr2);

// __proto__  
let obj1 = {
       firstName : "John",
       lastName : "Doe",
       fullName : function(){
              return `${this.firstName} ${this.lastName}`
       }
}

obj1.t ;
console.log(obj1.fullName());

let obj2 = {
       firstName : 'Max',lastName : "Double Max"
}

obj2.__proto__ = obj1 ;
console.log(obj2.fullName());

let obj3 = {
       firstName : "Default ",
}
obj3.__proto__ = obj1 ;
console.log(obj3.fullName());




// prototype 
function Nad(){
       name : 'John'
}

let n = new Nad();