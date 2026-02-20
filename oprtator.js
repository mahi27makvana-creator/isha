// // // operators
// // // Arithmetic , comparison, logical, assignment, unary, ternary
// // // Arithmetic :
// // // +, -, ,/, *, **, %
// // // +  --> add and cocatention 
// // // ex. 
// // // 1+2 , "user" + "name"
// // // - 
// // // ex. 2 - 1
// // // /, *
// // // ex. 240/2, 25*2
// // // % (modules) (sheshfal)
// // // ex. 12%4 --> 0
// // // ex. 9%2 --> 1
// // // ** (square) (exposination)
// // // ex. 2**3 --> 8


// // // Comparison (ans: true, false)
// // // ==
// // // ex. 12 == 13, 12 == "12" (don't check type, only check value, not strict comparison)
// // // ===
// // // ex. 12 === "12" (check type and value, strict comparison)
// // // !=
// // // ex. 12 != 13 (reverse of ==, not strict comparison)
// // // !==
// // // ex. 12!== "12" (reverse of ===)
// // // >=
// // // ex. 22 >= 22
// // // <=
// // // ex. 13 <= 13
// // // <
// // // ex. 12 < 113, 12 < 9, 22 < 22
// // // >
// // // ex. 12 > 113, 12 > 9, 13> 13

// // // ASSIGNMENT
// // // =
// // // give a value, value assignment oerator
// // // ex. let a = 12;
// // // += 
// // // ex. a -= 3; (add value into old value and save it into a)
// // // -=
// // // ex. a -= 4; (subtract value into old value and save it into a)
// // // *=
// // // ex. a *= 2;
// // // /=
// // // ex. a /= 2;
// // // %=
// // // ex. a%= 2; (give remainder)

// // // logical
// // // && (AND)
// // // ex. true && true --> true 12<13 && 14<15 --> true
// // // false && true --> false 12<10 && 14 < 15 --> false
// // // true && false --> false
// // // false && false --> false

// // //  || (OR)
// // // ex. true || true --> true
// // // fasle || true --> true
// // // true || false --> true
// // // false || false --> false

// // // ! (NOT)
// // // ex. !true --> false
// // // !fasle --> true
// // // !12 --> false --> !!12 --> true


// // // unary operator
// // // + - ! typeof  "name" --> string
// // // +
// // // convert string to number
// // // ex. +"5" --> 5
// // // +"Name" --> NaN
// // // -
// // // ex. -5
// // // !
// // // ex. !12 --> false
// // // typeof
// // // ex. typeof "name" --> string
// // // ++
// // // ex. let a = 12
// // // a++ --> 12 // post ex. a++  a => 25
// // // ++a --> 13 // pre ex. a++ + a => 26
// // // --
// // // ex. let a = 3;
// // // a--
// // // a++

// // // ternary
// // // ? :
// // // condition ? true thase to print thase : false thase to print thase
// // // let a = 12>13 ? console.log("true"): console.log("false")

// // // typeof null --> object
// // // typeof [] --> object, let a =[]; a instanceof Array --> true 
// // // instanceof --> check type of reference data type // don't use typeof for reference data type
// // // typeof NaN --> number
// // // typeof --> premitive  data type mate use karvo
// // // instanceof --> refernce datab type mate use karvo


// // // Arithmetic Operators
// // console.log("1 + 2 :", 1 + 2);
// // console.log('"user" + "name" :', "user" + "name");
// // console.log("5 - 2 :", 5 - 2);
// // console.log("240 / 2 :", 240 / 2);
// // console.log("25 * 2 :", 25 * 2);
// // console.log("12 % 4 :", 12 % 4);
// // console.log("9 % 2 :", 9 % 2);
// // console.log("2 * 3 :", 2 * 3);

// // // Comparison Operators
// // console.log("12 == '12' :", 12 == "12");
// // console.log("12 === '12' :", 12 === "12");
// // console.log("12 != 13 :", 12 != 13);
// // console.log("12 !== '12' :", 12 !== "12");
// // console.log("22 >= 22 :", 22 >= 22);
// // console.log("13 <= 13 :", 13 <= 13);
// // console.log("12 < 113 :", 12 < 113);
// // console.log("12 > 9 :", 12 > 9);

// // // Logical Operators
// // console.log("true && false :", true && false);
// // console.log("true || false :", true || false);
// // console.log("!true :", !true);

// // // Assignment Operators
// // let x = 10;
// // console.log("x = 10 :", x);
// // x += 5;
// // console.log("x += 5 :", x);
// // x -= 3;
// // console.log("x -= 3 :", x);
// // x *= 2;
// // console.log("x *= 2 :", x);
// // x /= 4;
// // console.log("x /= 4 :", x);

// // // Unary Operators
// // let y = 5;
// // console.log("y =", y);
// // console.log("++y :", ++y);
// // console.log("y-- :", y--);
// // console.log("y after y-- :", y);

// // // Ternary Operator
// // let age = 18;
// // console.log("age >= 18 ? 'Adult' : 'Minor' :", age >= 18 ? "Adult" : "Minor");

// // ex.1
// let x = 10;
// let y = 20;
// if(x>5 && y > 5)
//     {
//     console.log("Both are greater than 5");
// }else{
//     console.log("One or both are not greater than 5");
// }
// // answer: Both are greater than 5

// // ex.2
// let isAdmin = true;
// let isLoggedIn = false;
// if(isAdmin || isLoggedIn){
//     console.log("Acess granted");
// }else{
//     console.log("Acess Denied");
// }
// // answer: Acess granted

// // ex.3
// let temp = 35;
// if(!(temp > 30)){
//     console.log("Hot day");
// }else{
//     console.log("Pleasant day");
// }
// // answer: Pleasant day

// // ex.4
// let a = 0;
// if(a){
//     console.log("Truthy value");
// }else{
//     console.log("Falsy value");
// }
// // answer: Falsy value

// //ex.5
// let score = 78;
// let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
// console.log("Grade:", grade);
// // answer: Grade: C

// // ex.6
// let points = 120;
// let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
// console.log("Status:", status);
// // answer: Status: Gold

// // ex.7
// let loggedIn = true;
// let hasToken = false;
// let access = loggedIn && hasToken ? "Allow" : "Deny";
// console.log("access:", access);
// // answer: access: Deny

// // ex.8
// let p = 5;
// p++;
// console.log(p);
// // answer: 6

// // ex.9
// let d = 8;
// ++d;
// console.log(d);
// // answer: 9

// // ex.10
// let k = 4;
// let l = k++;
// console.log(k, l);
// // answer: 5 4

// // ex.11
// let b = 4;
// let c = ++b;
// console.log(b, c);
// // answer: 5 5

// // ex.12
// let m = 10;
// console.log(m--);
// console.log(m);
// // answer: 9 and 10

// // ex.13
// let n = 5;
// let result = n++ + ++n;
// console.log(result);
// // answer: 12

// // ex. 14
// let likes = 100;
// function likePost() { 
//      return ++likes;
// }
// console.log(likePost( ));
// console.log(likes);
// // answer: 101, 101

// // ex.15
// let count = 5;
// if(count-- === 5){   
// console.log("Matched");
// }else{
//     console.log("Not Matched"); 
// }
// // answer: Matched



// hasti hasti hasti
// hasti hasti hasti
// hasti hasti hasti
// hasti hasti hasti
// hasti hasti hasti
// hasti hasti hasti
