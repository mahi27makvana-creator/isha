// objects vs Array
// objects -- when you want to show all data based on one entity( ek j entity mate all data jota hoy) (ex. one user data)
// Array -- when you want to show entity (ex.all users)
// let user_data = [{name:"abs",email:"test@gmail.com"}, {name:"def"},{name:"abc1"}, {name:"ABC"}]


//create
// variable = {}
// key : value --> key-value sturcture
let user = {
    name:"Test",
    email:"test@gmail.com",
    roll_no:70,
};

// access (dot vs square notation)
// variable_name.key_name;
user.name;
user.email;
// user.first-name;
// variable_name['key'];
// user['name']
// user[name]
// let demo = "name"
// user[demo]   // --> convert into name (demo = 'name') --> output:abc
// user["name"] = Test


// nesting and deep access
const user1 = {
    name : "test",
    city : "surat",
    pin : 395009,
    location :{
        lat : 24.2,
        lng : 77.4,
    },
    email : "test@gmail.com",
}; // -- nested object
user1.address.location.lat; // --> deep access
// user1.address.location.lng;


// object destructuring:
let { lat, lng} = user1.address.locations;
let { lat: abc_lat } = user1.address.locations;
// destructure and remove variable name

let demo = {
    first_name : "demo",
    last_name : "user",
    age : 40;
    email : "demo@user.com"
}

// looping 
// for (variable name in object_name){}
for (const key in demo) {
    console.log(key);
    // obj.key --> not working
    console.log(demo[key]);
    // console.log(key, ":", demo[key]) --  log whole object
}

// copy objects : spred , object.assign, deep clone
// spred
let user_data = {...demo};
// let user_data = {gender: "male", ...demo} // add key-value and copy object
// use case : state update
// const user = {
// name :"amit",
// age : 30
// };

// const updateduser = {
// ...user, 
// age : 30
// };

// console.log(updateduser);


// onject.assing -- copy and add keys-value
let user_data_assign = Object.assign({}, demo); // nothing will be add just copy
let user_data_assign1 = Object.assign({phone_number : 7878747574},demo); // - add and copy
// use case : default settings + user settings merge
// const defauultsettings = {
// theme : "light",
// language : "en"
// };

// const usersettings = {
// theme : "dark"
// };

// const finalsettings = object.assign({}, defaultsettings, usersettings);

// console.log(finalsettings);


// object.assign VS spred
// object.assign() -- method -- ESS old version, less used
// spred -- oprator -- state updated, most used in react application, clean mode,
