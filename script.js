// values

"Ardit asdajksd a,.d .asd,. a,.sd";
true;
false;

//variables and naming conventions
let firstName = "Adni";
let age = "20";
console.log(firstName, age);

let x = 5;
let y = 3;

let lastName;

console.log(firstName, age);
console.log(x - y);

let job1 = "programmer";
let job2 = "Teacher";

let myFirstJob = "programmer";
let mySecondJob = "teacher";

// data types
/* 
1) Number
2) String
3) Boolean
4) Null
5) Undefined
6) Big int
7) Symbol
*/

console.log(typeof ("Adni"));

//operator to check data type
console.log(typeof (myFirstJob));

let computer = "HP";
console.log(computer);
computer = "Asus";
console.log(computer);

computer = 16;
console.log(computer);

// let vs const vs var

const school = "Gjimnazi i specializuar...";

console.log(school);

let something = "Just something";
something = "Something else";

var greeting = "Hello";
console.log(greeting);


// operators
// Arithmetical operators
// Addition +
// Substraction -
// Multiplication *
// Exponentiation **
// Modulus %
// Increment ++
// Decrement --
// Division /

let i = 1;
i++;
i++;
console.log(i)

i--;
console.log(i);

//Assignment operators
// =
// +=
// -=
// *=
// /=

i = 10;
// i = i + 20;
i += 20;

console.log(i);


// Comparisson operators >
// Greater than <
// Less than
// Equal ==
// Stricly equal ===
// Not equal !=
// Stricly not equal !==


console.log(10>12);

console.log(10==="10")

console.log(10=="10")


// Swapping variables
let a = 10;
let b = 20;
let c;
c = b;
b = a;
a = c;
console.log(a);
console.log(b);



/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).Store Mark's and John's mass and height in variablesCalculate both their BMIs using the formula (you can even implement both versions)Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK */

let heightMark=1.69;
let weightMark=78;
let BMIMark=weightMark/(heightMark**2);

let heightJohn=1.95;
let weightJohn=92;
let BMIJohn=weightJohn/(heightJohn**2);

let johnHigherBmi = BMIJohn>BMIMark

console.log(johnHigherBmi)
console.log(BMIJohn)
console.log(BMIMark)