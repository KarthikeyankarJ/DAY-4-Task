// compare two JSON have the same properties without order
console.log("**************to find ojebect Equal or not***************");

let isEqualsJson = (object1,object2)=>
        {
            keys1 = Object.keys(object1);
            keys2 = Object.keys(object2);
            // to check the object are equal or not
            return keys1.length === keys2.length && Object.keys(object1).every(key=>object1[key]==object2[key]);
        }

let object1 =
        {
            "name":"Karthi",
            "Degree":"BE MECH"
        };
let object2 = 
        {
            "Degree":"BE MECH", 
            "name" :"Karthi"
        }; 

console.log(isEqualsJson(object1,object2));


// rest country detail


let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    console.log("****************get all country flag*****************");
    const data1 = JSON.parse(xhr.response);
    for(key in data1){
        console.log((+key+1)+" "+"=>", data1[key].flags.png);
     }
   
}

// rest country name, region, sub-region ans population

let xhr1 = new XMLHttpRequest();
xhr1.open("GET","https://restcountries.com/v3.1/all");
xhr1.send();
xhr1.onload = function(){
    console.log('******************Countryname,Region,Subregion,Population********************')
    const data2 = JSON.parse(xhr1.response);
    for(key in data2){
        console.log((+key+1)+ ". country name -", data2[key].name.common, '** Region -', data2[key].region, '** Sub region -',data2[key].subregion, '** Population -', data2[key].population );
        
    }
   
}




console.log("*****************Simple Programs todo for variables task 1st question********************")
var a;
var b;
var c;
var d;
console.log(a,b,c,d);

console.log("*******************Simple Programs todo for variables task 2nd question********************")

let a1=10;
let b1=20;
let c1 =30;
console.log(a1,b1,c1);


console.log("*********************Simple Programs todo for variables task 3rd question******************")
var firstName = "Karthikeyan";
var age= 26;
var maritalStatus = "single";
console.log(firstName, age, maritalStatus);

console.log("**********************Simple Programs todo for variables task 4th question*********************")
var [firstName, lastName, age, maritalStatus] = ["Karthi", "J", 26, "single"];
console.log(firstName, lastName, age, maritalStatus);

console.log("*************************Simple Programs todo for variables task 5th question******************")
var a = "hey GUVI";
var check = true;
var b;
var c = null;
console.log(a, check, b, c);

console.log(".********************Simple Programs todo for variables task 6th question*********************")
var x = "550";
console.log(typeof x);

console.log("************************Simple Programs todo for variables task 7th question************************")

console.log("*********************Square of a number***************************")
var a = 11;
var square_a = Math.pow(a,2);
console.log(square_a);

console.log("*********************Swapping 2 numbers***************.")
var a = 10;
var b = 7;
[a, b] = [b, a];
console.log(a, b);

console.log("********************Addition of 3 numbers*************************")
var a = 15;
var b = 20;
var c = 25;
var sum = a+b+c;
console.log(sum);

console.log("*******************Celsius to Fahrenheit conversion*************************.")
var a2 = 45;
var b2 = a2 + 33.8;
console.log(b2);

console.log("********************Volume of spear*************************")
let r=4;
let spear = ((4/3)*(22/7)*(r*r*r));
console.log(spear.toFixed(2)+' cubic units');



console.log('******************area of triangle**************************');
let A= 10;
let B=5;
console.log((A*B/2));
