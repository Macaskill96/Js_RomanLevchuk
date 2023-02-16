







// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function kimnata (num1, num2) {
//     let result = num1*num2
//     console.log(result);
//     return result
// }
// kimnata(10,2)
// let x = (a, b) => a * b;
//
// console.log(x(10,2));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function krug (num2) {
//     let result = 3.14 * num2**2
//     console.log(result);
//     return result
// }
// krug(14)
// let kryg = (p, r) => p * r**2;
// p = 3.14;
// console.log(kryg(3.14,6));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cilindr (R, H) {
//     let result = (2 * 3.14) * R * H
//     console.log(result);
//     return result
// }
// cilindr(6,6)
// p = 3.14
// let cilindr = (p, r ,h) => 2*p * r * h;
// console.log(cilindr(p,6,6))


// - створити функцію яка приймає масив та виводить кожен його елемент

// function printerArray (Array) {
//     for (const masiv of Array) {
//         console.log(masiv);
//     }
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
// ]
// printerArray(users)

// Second variant
// let masive = [];
// function add (array) {
//     for (const arrayElement of array) {
//         masive.push(arrayElement)
//         console.log(arrayElement)
//     }
// }
//
// add(users)



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function tez (title) {
//     let text = `<p>${title}</p>`
//     document.write(text);
// }
// tez ('jsdfkjhds')

// let Paragraf = (text) => {
//     document.write(`<p>${text}</p>`)
// }
// Paragraf( 'akuna_matata')




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function table (a){
//     let x =
//         `<ul>
//         <li>${a}</li>
//         <li>${a}</li>
//         <li>${a}</li>
//     </ul>`
//
//     console.log(x);
// }
//
// table ('text')


// let paragraf = (texts) => {
//     document.write(`<ul>
//         <li>${texts}</li>
//         <li>${texts}</li>
//         <li>${texts}</li>
//     </ul>`);
// }
// paragraf('hello kitty');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function rahunok(text,num1) {
//     let result = num1;
//     document.write(`<ul>`)
//     for (let i = 0; i < result; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//
//     document.write(`</ul>`)
//
// }
// rahunok ('baby', 7)


// let check = (text, num1) => {
//     let numbers = num1;
//     document.write(`<ul>`)
//     for (let i = 0; i < numbers; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// check('hello', 55)



// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [235, 23, 'dfsd', true]
// function list (arr) {
//     document.write(`<ul>`)
//     for (let arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list(arr)


// let arr = [235, 23, 'dfsd', true]
// let spisok = (array) => {
//     document.write (`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//
//     }
//     document.write (`</ul>`)
// }
// spisok(arr)
//


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//
// let masiv = [
//     {
//         ID: 67921,
//         name: 'Sergiy',
//         Age: 55
//     },
// {
//         ID: 54921,
//         name: 'Diana',
//         Age: 22
// },
//     {
//         ID: 37348,
//         name: 'Dimon',
//         Age: 26
//     },
//     {
//         ID: 45732,
//         name: 'Maxim',
//         Age: 27
//     }
// ]
//
// function users (argument) {
//     for (const argumentElement of argument) {
//         document.write(`<div>
// ID: ${argumentElement.ID}, Name: ${argumentElement.name},  Age:${argumentElement.Age}
// </div>`)
//
//     }
// }
// users(masiv);


// let calls = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>
//             Id: ${arrElement.ID},
//             Name: ${arrElement.name},
//             Age: ${arrElement.Age}
//         </div>`)
//
//     }
//
// }
// calls(masiv)

// - створити функцію яка повертає найменьше число з масиву
//
// let x = [56,296,7,456,32]
// function minNumber (arr) {
// let firstNum = arr[0];
//     for (const arrElements of arr) {
//         if (firstNum > arrElements) {
//             firstNum = arrElements;
//         }
//
//     }
//
//     return firstNum;
// }
//
// console.log(minNumber(x))

// let x = [56,296,7,456,32]
// let minimum = (arr) => {
//     let first = arr[0];
//     for (const arrElement of arr) {
//         if (first > arrElement) {
//             first = arrElement;
//         }
//
//     } return first;
// }
// console.log(minimum(x))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let y = [60,40,80];
// function sum (arr) {
//     let suma = 0;
//     for (const arrElement of arr) {
//         suma += arrElement; }
//     console.log(suma);
//     return suma;
//
// }
// sum(y);


// let y = [60,40,80];
// let add = (arr) => {
//     let suma = 0;
//     for (const arrElement of arr) {
//         suma += arrElement
//     }
//     console.log(suma);
// }
// add(y);



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
// let x = [56,97,96,98];
// function swap (arr, index1, index2) {
//    let a = arr[index1]
//     let b = arr[index2]
//
//     arr[index1] = b;
//    arr[index2] = a;
//     console.log(arr);
// }
// swap(x, 1, 3)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange (UAH, changeCurrency, endCurrency) {
//     for (const item of changeCurrency) {
//         if (item.currency === endCurrency) {
//             return UAH / item.value;
//         }
//     }
// }
// console.log(exchange(9865,[
//     {
//     currency: 'USD', value: 40},
//     {currency: 'EUR', value: 42}
// ], 'USD'));

// let change = (UAH, Value) => {
//     let USD = {
//         Currency: 'USD',
//         Value: 40
//     };
//     let EUR = {
//         Currency: 'EUR',
//         Value: 42
//     }
//
//     if ( Value === 'USD') {
//         return UAH/USD.Value
//     } else if ( Value === 'EUR') {
//         return UAH/EUR.Value
//     }
// }
//
// console.log(change(10000, 'EUR' ))