// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let str_1: string = 'hello'
let str_2: string = 'owu'
let str_3: string = 'com'
let d: string = 'ua'
let num1: number = 1
let num2: number = 10
let num3: number = -999
let num4: number = 123
let pi: number = 3.14
let float1: number = 2.7
let num5: number = 16
let bool1: boolean = true
let bool2: boolean = false

console.log(str_1);
console.log(str_2);
console.log(str_3);
console.log(d);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(pi);
console.log(float1);
console.log(num5);
console.log(bool1);
console.log(bool2)

// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName: string = 'Андрій'
let lastName: string = 'Токовий'
let middleName: string = 'Юрійович'
// let person:string= firstName + ' ' + lastName + ' ' +middleName
let person: string = `${firstName} ${lastName} ${middleName}`
console.log(person);

// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a: number = 100;
let b: string = '100';
let c: boolean = true;
console.log(typeof a, typeof b, typeof c)