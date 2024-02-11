let a = document;
a = document.all;
// a = document.body;
// a = document.forms[0];
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
// use document.images and document.scripts and print the list of images and scripts on an html page
console.log(a);
a = document.links;     //aama badha a tag aavse
let str = 'harry';

Array.from(a).forEach(function (element) {
    // element=String(element)
    element = element.href;
    if (element.includes('harry')) {
        console.log(element);
    }
});

// 1. Single element selector
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Harry is a good boy';
element.innerHTML = '<b>Harry is a good boy</b>';
// console.log(element.innerText);


let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green';
console.log(sel)

// 2. Multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems)

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//    element.style.color = 'blue'; 
// }
Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
    console.log(elems[0].getElementsByClassName('child'))
});


let container = document.querySelector('div.container');

console.log(container.children[1].children[0].children);

console.log(container.firstChild);
console.log(container.firstElementChild);

console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.children);
console.log(container.childElementCount); // Count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);

// Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul)
// console.log(element)

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);

document.querySelector('.no').addEventListener('mouseenter', function () {
    console.log('You entered no');
})

document.querySelector('.no').addEventListener('mouseleave', function () {
    console.log('You exited no')
})

document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})

