// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;

// Primitive data types

// String
let name = "harry";
console.log("My string is " + name);
console.log("Data type is " + (typeof name));

// Numbers
let marks = 34.4;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference Data Types

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    Rohan: 34
}
console.log(typeof stMarks);

function findName() {

}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);


// Type conversion 
let myVar = 34;
myVar = myVar.toString();
// myVar = String(myVar);
console.log(myVar, (typeof myVar));

let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr = String([1, 2, 3, 4, 5]);
// console.log(arr.length, (typeof arr));

let i = 75;
// console.log(i.toString())

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(stri, (typeof stri));

let number = parseFloat('34.098');


console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);

const name = 'Harry';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html = "<h1> this is heading</h1>" +
    "<p> this is My para</p>";

html = html.concat('this', ' str2');
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('dsfsdfd'));
console.log(html.includes(' fg'));
// console.log(html.substring(1,6));
// console.log(html.slice(0, 4))
// console.log(html.split('>'));
// console.log(html.replace('this', 'it'));

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;
let marks = [34, 23, 24, 93, 73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23, 123, 21, 'Orange');
// console.log(marks);
// console.log(mixed);
// console.log(fruits[1]);

// console.log(arr.length);
// console.log(Array.isArray('dfdf'));
arr[0] = 'harry';
let arrelement = arr[0];
// console.log('element :', arrelement);
// console.log(arr);

let value = marks.indexOf(73);
// console.log(value)

// Mutating or Modifying arrays
// marks.push(3564);
// marks.unshift(1009);
// marks.pop()
// marks.shift()
// marks.splice(2, 3);
// marks.reverse()
let marks2 = [1, 2, 3, 7]
marks = marks.concat(marks2);
// console.log(marks);

let myobj = {
    'first name': 'harry',
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1, 5, 3, 6]
}

console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)

const age = 128;
const doesDrive = false;
// const vari = 34;

// if (age!=19){
//     console.log('Age is not 19')
// }

// if(age !== 65){
//     console.log('Age is not 65')
// }

// else{
//     console.log('Age is not 19')
// }

// if (typeof vari !== 'undefined'){
//     console.log('Vari is defined');
// }

// else{
//     console.log('Vari is not defined');
// }

// if (doesDrive || age>18){
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

// console.log(age==45? 'Age is 45': 'Age is not 45');

switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}

// General Loops: for, while, do-while
// let a =34;
// a +=1;
// a++;
// console.log(a);
// for(let i=0; i<100;i++){
//     console.log(i);
// }

// let j = 110;
// while (j < 10) {
//   console.log(j + 1);
//   j += 1;
// }

// let k = 0;
// do {
//     if(k===5){
//         k +=1;
//         continue;
//     }
//   console.log(k + 1);
//   k +=1;
// } while (k < 10);

let arr = [2, 5, 6, 4, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

arr.forEach(function (element, index, array) {
    console.log(element, index, array);
});

// let obj = {
//     name: "Rohan Das",
//     age: 78,
//     type: "Dangerous Programmer",
//     os: "Ubuntu"
// }
// for(let key in obj){
//     console.log(`The ${key} of object is ${obj[key]}`)
// }

console.log('done');

if (1) {
    let i = 234;
    console.log(i)
}

console.log(i);

function ui(name) {
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("harry"), i)

let a = window.document;
// alert('hello harry');
// a = prompt('This will destroy your computer. Type your name');

// a = confirm('Are you sure you want to delete this page?');
a = window.innerHeight;
a = innerWidth;
a = scrollY;
a = location.toString();
let b = window.open(src = '//google.com', outerWidth = '30px', outerHeight = '30px');
b.close();//window bandh karva
// location.reload(); 
// history.go(1);
console.log(a);

