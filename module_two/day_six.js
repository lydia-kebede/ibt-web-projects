// Lesson one variable and data types 
// Variable in javascript used to store a value so we can use it later 
    // In js we assign variables in 2 way const and let.
    // const = for a variable name that can't be re assigned .
    // And let is for variable name that can be assigned.
    // We use camel case for variable declaration 

    const shopName = "Lynede clothing";
    const vatRate = 0.15;
    console.log(shopName)
// Data types 
// Primitive data types in javascript 
let city = "Addis Ababa"
number = 16
boolean = true , false 
// undefined = let x;
// null = deliberately empty .
bigint = 90n // very large number 
symbol = Symbol() //unique keys 

// Checking the type of data type.
console.log(typeof city)
console.log(typeof undefined)
console.log(typeof null)
// Converting values between types 
const price = "345"
console.log(typeof price)

// Second day const vatNumber = "15";
console.log(typeof vatNumber)
console.log(Number(vatNumber) + 60);
console.log(String(vatNumber) + 60); // this what we call converting the type 

// Tuth falsy and equality value 
// === we use this for equality test without converting types.This compare both type and value .

// == but this uses == only 
console.log(price + 20)
// second _day
const vatNumber = "15";
console.log(typeof vatNumber)
console.log(Number(vatNumber) + 60);
console.log(String(vatNumber) + 60); // this what we call converting the type 

// Tuth falsy and equality value 
// === we use this for equality test without converting types.This compare both type and value .

// == but this uses == only 
// operators and expressions 
// Experession produces value
//Operators combine values into expressions 
// arithmetic for maths, comparison and logic for decisions, and template literals for
// readable text.
// Arthimetic and assignment 
addition = 480 + 20
console.log(addition)
subtraction = 234 - 20
console.log(subtraction)
multiplication = 4 * 5
console.log(multiplication)
division = 6 / 3
console.log(division)
remainder = 6 % 2
console.log(remainder)
power = 2**4
console.log(power)
// Comparison and logical operators 
// === !== this are eqaul and not equal 
// <
// >
// <=
// >=
// && = and 
// || = or 
// ! flips a boolean value.
// Template literals 
// using backticks trying to embed any expression 
const name_one ="Lydia"
const totall = 390;
console.log(`Hi ${name_one}, please pay the total amount is ${totall}ETB.`)
// The ternary operator 

// condition ? valueIfTrue : valueIfFalse;
const total = 1200;

const fee2 = total >= 1000 ? 0 : 60;

console.log(fee2);
// Lesson three 
// control flow 

// if/else 

// if else exercise 
let age = 22;
if (age >= 18){
    console.log("This person is an adult!")

} else {
    console.log("This person is a minor ")
}

// If else second question 
let pricee = 500;

if (pricee > 1000){
    console.log("The item is expensive")
} else{
    console.log("The item is affordable")
}

// Switch for many cases
// switch exercises 
let day = 2;
let dayName;
 switch(day){
    case 1:
        dayName = "Monday"
        break;
    case 2:
        dayName = "Tuesday"
        break;
    case 3:
        dayName = "Wensday"
        break;
    default:
        dayName = "Another day"
 }

 const paymentMethod = 'Telebirr'

 switch()

//  Lesson four 
// Scope and Hoisting 
// Scope = region where variable can be used 
// Global = declared outside anyblock 
// function = declared inside the function 
// block = declared in the block likr let const 

// Review exercise 
// We need to use const when we don't want to change the variable name 
// It produces 48020 and we can fix it by changing "480 to Number(480) + 20 when we run this code we can get 500."
// == this changes types of variable and then compare but === this will copare diractly as they are.

const numericPrice = Number(price);
console.log(numericPrice + 20)
console .log(Number("Hello")) // this prints NAN  not a number 
// == and ===  == this may convert value before operation and === this is the best for comparision.
