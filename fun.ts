
// normal function
function add(a: number, b: number): number {
    return a + b
}
console.log(add(1, 2))



// arrow function
const add2 = (a: number, b: number): number => {
    return a + b
}
console.log(add2(1, 2))

// arrow function with type annotation
const add3 : (a: number, b: number) => number  = (a,b) => {
    return a + b
}
console.log(add3(1, 2))


function greet(name: string): void {
    console.log(`Hello ${name}`)
}
greet("noah")

function mySlice(start?: number, end?: number): string {
    return "hello"
}
console.log(mySlice(1, 2)) 
console.log(mySlice(1)) 
console.log(mySlice()) 

// object type

let person: {name: string; age: number; greet(name:string):void} = {
    name: "noah", 
    age: 23,
    greet: () => {
        console.log(`Hello ${person.name}`)
    }
}
console.log(person)



// object type with optional property
function printPerson(person: {name: string; age: number; greet(name:string):void}) {
    console.log(person)
}
printPerson({name: "noah", age: 23, greet: () => {console.log(`Hello ${person.name}`)}}
)   


