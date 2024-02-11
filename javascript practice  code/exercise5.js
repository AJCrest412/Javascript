let regex = /harrsdfgy/;
// Lets look into some metacharacter symbols
// regex = /^harrdc/; // ^ means expression will match if string starts with
// regex = /harry$/; // $ at the end of the string means "string ends with"
// regex = /h.rry/; //matches any one character or digit or any thing even space also
// regex = /h*rry/; //matches any 0 or more characters
// regex = /ha?rryi?t/; //? after character means that character is optional
// regex = /h+rry/    //This character allows one or more preceding term
// regex = /h\*rry/
// regex = /.+\/+./  //we can many like this

// let str = "h*rry means codewith"; // 
let str = "hry means hhhhrrytcodewith hrary"; // 

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
    console.log(`The string  ${str}  matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

// Character Sets - We use []
let regex = /h[a-z]rry/; // can be any character from a to z
regex = /h[aty]rry/; // can be an a, t or y
regex = /h[^aty]rry/; // cannot be any of a, t or y
regex = /h[^aty]rr[yYu]/; // cannot be any of a, t or y + can be a u or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; // we can have as many character sets as we want

// Quantifiers - We use {}
regex = /har{2}y/; // r can occur exactly 2 times
regex = /har{0,2}y/; // r can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings  - We use paranthesis for groupings ()
regex = /(har){2}([0-9]r){3}/

// const str = "hirry9 bhai";
str = "harry bhai";
str = "harhar1r4r5r bhai";


let result = regex.exec(str);
console.log("The result from exec is ", result);


if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

