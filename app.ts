// Basic TypeScript 
// Primitive data types (number, string, boolean, null, undefined, symbol, bigint)
// Arrays, 
// tuples, 
// enums, 
// any, void, never, unknown



// let a: number = 10;
// let b: string = "Hello, TypeScript!";
// let c: boolean = true;
// let d: null = null;
// let e: undefined = undefined;
// let f: symbol = Symbol("unique");
// let g: bigint = 9007199254740991n;


// tuples, 

let tuple: [number,string] = [3,"Rohan"];
let tuple2: [number, string, boolean] = [1, "Hello", true];

// enums, (by default, enums are number-based, starting at 0. You can also assign specific values to enum members.) "enumerations"

// enum Color {
//     Red,    // 0
//     Green,  // 1
//     Blue    // 2
// }

// enum userRole {
//     ADMIN = "admin",
//     USER = "user",
//     GUEST = "guest"
// }
// userRole.ADMIN; // "admin"
// userRole.USER; // "user"

// any, void, never, unknown,null, undefined
// let a : any; // any type, can hold any value

// a = 10; // number
// a = "Hello"; // string
// a = true; // boolean

// unknown type, can hold any value but requires type checking before use
//  let a:unknown;
//  a = 10; // number
// a = "hello"; // string

// if (typeof a === "string") {
//         a.toUpperCase(); // TypeScript knows 'a' is a string here
//     }

// void type, typically used for functions that do not return a value

// function abcd (): void {
//     console.log("This function does not return anything.");
// }
// function p1 ():number { 
//     return 10; 
// } 
// function p2 ():string  { 
//     return "Hello"; 
// } 

// let a:null;
// let b :undefined;


// ======================
// Type Interence 
// Understanding type interence 

// Tyoe annotaions 
// let a : number | string | boolean ;
// a = 20;
// a = "Hello";
// a = false ;

