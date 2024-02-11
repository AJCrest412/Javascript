
let impArray = ['adrak', 'pyaz', 'bhindi'];

// // Add a key-value pair inside local Storage
localStorage.setItem('Name', 'Harry');
localStorage.setItem('Name2', 'Rohan');
localStorage.setItem('Sabzi', JSON.stringify(impArray));

// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name');

// Retrieve an item from the local Storage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name)

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));

let x = 3;
let y = 6;
let z;
z = x + y;
z = x - y;
z = x * y;
z = x / y;

// Exploring the Math object
z = Math;
z = Math.PI;
z = Math.E;
z = Math.round(5.4);
z = Math.ceil(5.3);
z = Math.floor(-5.3);
z = Math.abs(5);
z = Math.sqrt(64);
z = Math.pow(2, 3);
z = Math.min(2, 3, 34, 234, 2342, 34);
z = Math.max(2, 3, 34, 234, 34);
z = Math.random();
z = 100 * Math.random()
z = Math.ceil(50 + (100 - 50) * Math.random())

console.log(z);

let today = new Date();
// console.log(typeof today);
let otherDate = new Date('8-4-2003 04:54:08');
// otherDate = new Date('June 13 1976');
// otherDate = new Date('09/16/1976');
console.log(otherDate);
let a;
// a = otherDate.getDay();
// a = otherDate.getDate();
// a = otherDate.getMinutes();
// // a = otherDate.getSeconds();
// // a = otherDate.getHours();
// a = otherDate.getTime();
// a = otherDate.getMilliseconds();
// a = otherDate.getMonth();
console.log(a);
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);

// Object Literal for creating objects
let car = {
    name: "Maruti 800",
    topSpeed: 89,
    run: function () {
        console.log("car is running");
    }
};
// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} Is Running`);
    };
    this.analyze = function () {
        console.log(
            `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
        );
    };
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Marutu Alto", 80);
car3 = new GeneralCar("Mercedes", 200);
console.log(car1, car2, car3);

setTimeout(() => {
    for (let index = 0; index < 4005; index++) {
        const element = index;
        console.log("This is index number" + index);

    }
}, 100);

function getData() {
    console.log("Started getData")
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        console.log("Inside first then")
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log("Inside second then")
        console.log(data);
    })
}


function postData() {
    url = "https://api.instantwebtools.net/v1/passenger";
    data = `{
        "name": "John Doe",
        "trips": 250,
        "airline": 5
    }`
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data   // aapde post vakhte string moklvani hoy
    }
    fetch(url, params).then(response => response.json()).then(data => console.log(data)
    )
}

console.log("Before running getData")
getData()
console.log("After running getData")
postData()

