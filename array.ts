let num: number[] = [1,2,3,4,5]
console.log(num)

let num2: Array<number> = [1,2,3,4,5]
console.log(num2)

//array of string
let str: string[] = ["a","b","c","d","e"]
console.log(str)

//array of mixed type
let arr: (string | number)[] = [1,"a",2,"b",3,"c"]
console.log(arr)

// use type alias
type CustomArray = (string | number)[]
let arr2: CustomArray = [1,"a",2,"b",3,"c"]
console.log(arr2)
let arr3: CustomArray = [1,"d",4,"e",5,"f"]
console.log(arr3)

// array of object
type Person = {
    name: string
    age: number
}
let arr4: Person[] = [{name:"noah",age:23},{name:"john",age:24},{name:"jane",age:25}]
console.log(arr4)

