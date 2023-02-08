// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let masiv = [10, 15, 26, 40, 'Andjey', 'duda', 'polish', 'russiakaput', 60, 2023];
console.log(masiv);
console.log(10,[0]);
console.log([1]);
console.log([2]);
console.log([3]);
console.log([4]);
console.log([5]);
console.log([6]);
console.log([7]);
console.log([8]);
console.log([9]);






// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books = {
    title: 'potter',
    countpage: 300,
    genre: 'fantasy',
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book2 =
    {title: 'Faraon',
    countpage: 200,
    ganre: history,
    Autors: [
        {Name: 'Romero', age:33},
        {Name: 'Tolik', age: 36}
    ]
    };





// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача (тут я з не уважності вказав вік а не нікнейм)

let user = [
    {name: 'tolik', age: 22, password: 'Jkal345' },
    {name: 'anna', age: 43, password: 'Kjvja' },
    {name: 'mike', age: 65, password: 'Kv4iu4' },
    {name: 'nina', age: 12, password: 'B359d9'},
    {name: 'masha', age: 18, password: 'vjksdkf'},
    {name: 'Juke', age: 33, password: 'sdbbkhdjs'},
    {name: 'katya', age: 24, password: 'sdffsg43'},
    {name: 'stas', age: 45, password: 'dsjf356'},
    {name: 'Dima', age: 23, password: '5757jgn'},
    {name: 'maxim', age:26, password: '23623gds'}
];
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);




// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 6;
let a = 0;
if( x || a !== 0 ) {
    console.log(true);
}else {
    console.log(false);}






// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 44;
 if (time <= 15) {console.log('First')}
else if(time >15 && time <=30){
    console.log('Second')}
else if(time >30 && time <=45){
    console.log('third')}
else if(time >45 && time <=59) {
    console.log('Fourth')}











// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 21;
if (day <= 10) {
    console.log('first dekada')
}
else if (day>10 && day <= 20) {
    console.log('second dekada')}
else if (day>20 && day <=30) {
    console.log('third decada')}











// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
// нажаль пізніше зрозумів що то два різних завдання. Але обєднав в одне

let week = prompt('what do you do?');
if(week!==null && week.length>0){
    let numbersList= week.split(' ');
    numbersList = numbersList.filter(item => item !== '');

    if(numbersList.length>2){
        alert('Too many numbers')
    } else {
        let biggerNumber;
        if (numbersList.length === 2) {
            biggerNumber = numbersList[0] > numbersList[1] ? numbersList[0] : numbersList[1];
        } else {
            biggerNumber = numbersList[0]
        }
        let week = '';
        switch (+biggerNumber) {
            case 1:
                console.log('study english');
                break;

            case 2:
                console.log('learn js');
                break;
            case 3:
                console.log('watch movie');
                break;
            case 4:
                console.log('day off');
                break;
            case 5:
                console.log('hardwork');
                break;
            case 6:
                console.log('meet with friends');
                break;
            case 7:
                console.log('sleep');
                break;
        }
    }

} else{
    alert('Enter valid data, please')
}










//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)



let anyNumber;
anyNumber = anyNumber === 0 || anyNumber === false || anyNumber === undefined || anyNumber === null || anyNumber === NaN || anyNumber === ''?'default':anyNumber
console.log(anyNumber);







//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray[0].monthDuration);

if (coursesAndDurationArray[0].monthDuration >=5) {
    console.log('Super')
}
if (coursesAndDurationArray[1].monthDuration >=5) {
    console.log('Super')
}
if (coursesAndDurationArray[2].monthDuration >=5) {
    console.log('Super')
}
if (coursesAndDurationArray[3].monthDuration >=5) {
    console.log('Super')
}
if (coursesAndDurationArray[4].monthDuration >=5) {
    console.log('Super')
}
if (coursesAndDurationArray[5].monthDuration >=5) {
    console.log('Super')
}
