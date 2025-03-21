// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
var str_1 = 'hello';
var str_2 = 'owu';
var str_3 = 'com';
var d = 'ua';
var num1 = 1;
var num2 = 10;
var num3 = -999;
var num4 = 123;
var pi = 3.14;
var float1 = 2.7;
var num5 = 16;
var bool1 = true;
var bool2 = false;
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
console.log(bool2);
// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)
var firstName = 'Андрій';
var lastName = 'Токовий';
var middleName = 'Юрійович';
// let person:string= firstName + ' ' + lastName + ' ' +middleName
var person = "".concat(firstName, " ").concat(lastName, " ").concat(middleName);
console.log(person);
// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
var a = 100;
var b = '100';
var c = true;
console.log(typeof a, typeof b, typeof c);
// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
var my_name = prompt('Введіть своє ім`я: ');
var surname = prompt('Введіть своє прізвище: ');
var middle_name = prompt('Введіть своє прізвище:');
var full_name = "".concat(my_name, " ").concat(surname, " ").concat(middle_name);
if (typeof (my_name) === 'string' && typeof (surname) === 'string' && typeof (middle_name) === 'string') {
    console.log(full_name);
}
else {
    console.log('Дані було введено некоректно!');
}
