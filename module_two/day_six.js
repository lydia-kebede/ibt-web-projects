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
const numericPrice = Number(price);
console.log(numericPrice + 20)
console .log(Number("Hello")) // this prints NAN  not a number 
// == and ===  == this may convert value before operation and === this is the best for comparision.
