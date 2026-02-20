// // // Data types:
// // //two type of data types:
// // // 1. primitive data type
// // // copy ----> real value
// // let a = 12;
// // let b = a; // a--> 12
// // a = a+3;
// // // types : String, number, boolean, undefined, symbol, bigint

// // // 2. Non-Primitive Data Types (reference data types)
// // // copy --> give reference of parent
// // let temp_a = [1, 2, 3];
// // let temp_b = temp_a;
// // temp_b.pop(); // remove value
// // // types: arrays [], object {}, function ()


// // // <------Primitive data types----->
// // //type: string, number , boolean, null, undefined, symbol, bigint
// // // string:
// // // ''- single quotes
// // // ""- double quotes
// // // ``- bacticks
// // let d = "name";
// // d = 'username';
// // d = `firstname`;

// // // number:
// // let e = 12;
// // e = 12.25;

// // //boolean:
// // let f =  true;
// // f = false;

// // // null:
// // // you give a value
// // let g = null;

// // // undefined:
// // // you don't give a value, by default value
// // let h;    

// // // symbol:
// // // unique immutable value 
// // let u1= Symbol("uid");
// // let u2= Symbol("uid");
// // // check u1===u2
// // let obj ={uid: 1, name: "test", email: "test@test.com"};
// // let u3 = Symbol("uid")
// // obj[u3]= "001"

// // //bigint
// // // check range of number, Number.Max_SAFE_INTEGER
// // let number = 9007199254740991;
// // number = number + 2;

// //  let num2 = 9007199254740900n;
// //  num2 +3n;

// //  // <---Non-Primitive Data Types--->
// //  // types: arrays [], object {}, functions ()
// //  let temp_array = ["name", "age", "phone_number"];
// //  let obj = {name: "test", age:9, phone_number:6963524563}
// //  function name(params) {}

// //  //Dynamic Typing
// //  let temp_d = "name";
// //  temp_d = 123;
// //  temp_d = {}
// //  // javascript ---> typescript

// //  //Typeof quirks
// //  // typeof 12
// //  // check type of variable use --> ex. typeof NaN, typeof null, 1 + "1", 1 == "1", 1 === "1"
// //  // why typeof NaN --> number
// //  // ex. "hello" - 5 --> NaN

// //  // type coeration 
// //  // "5" + 1
// //  // "5" - 1

// //  // Truthy vs Falsy values
// //  // 0 false "" null underfined NaN document.all-- false
// //  // ex. !!0 -- check value is true and false
// //  // ex. if(null){}, js convert it into false
// //  // ex. if(-1){}, jd convert it into true
// //  // all --> true


// // ex.1
// // true + false
// // answer : 1

// // ex.2
// // null + 1
// // answer : 1

// // ex.3
// // "12" + 12
// // answer : '1212'

// // ex.4
// // !! undefined
// // answer : false

// // ex.5
// // "12" - 1
// // answer : 11

// // ex.6
// // 1.""hello" + 5"
// // answer : 'hello5'
// // 2."mahi"+27+"makvana"
// // answer : 'mahi27makvana'

// // ex.7
// let x;
// console.log(x);
// // answer : undefined
// let y = null;
// console.log(y);
// // answer : null






// mahi makwanafenlowrhfoasrhfgargbnkafsgjfgkafgkagfab?
// mahi makwanafenlowrhfoasrhfgargbnkafsgjfgkafgkagfab?
// mahi makwanafenlowrhfoasrhfgargbnkafsgjfgkafgkagfab?
// mahi makwanafenlowrhfoasrhfgargbnkafsgjfgkafgkagfab?
// mahi makwanafenlowrhfoasrhfgargbnkafsgjfgkafgkagfab?
// mahi makwanafenlowrhfoasrhfgargbnkafsgjfgkafgkagfab?