
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world';
// console.log(a.length);
// let b = 'lorem ipsum';
// console.log(b.length);
// let c = 'javascript is cool';
// console.log(c.length);


//===================================================================================================

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world';
// let UpperCaseA = a.toUpperCase();
// console.log(UpperCaseA);
//
// let b = 'lorem ipsum';
// let upperCaseB = b.toUpperCase();
// console.log(upperCaseB);
//
// let c = 'javascript is cool';
// let upperCaseC = c.toUpperCase()
// console.log(upperCaseC);





//========================================================================================================
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let a = 'HELLO WORLD';
// let UpperCaseA = a.toLowerCase();
// console.log(UpperCaseA);
//
// let b = 'LOREM IPSUM';
// let upperCaseB = b.toLowerCase();
// console.log(upperCaseB);
//
// let c = 'JAVASCRIPT IS COOL';
// let upperCaseC = c.toLowerCase()
// console.log(upperCaseC);

//==================================================================================================================
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
//     .replaceAll(' dirty','dirty')
//     .replaceAll('string   ', 'string')
// console.log(str);




//==================================================================================================================
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let split = str.split(' ')
// console.log(split);




//===================================================================================================================
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let map = numbers.map( x => x+'')
// console.log(map);





//====================================================================================================================
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//


// let nums = [11,21,3];
// function sortNums (direction) {
//     if ( direction === 'ascending') {
//         let sorts = nums.sort((a,b)=> a - b)
//         console.log(sorts);
//     }
//     if (direction === 'descending') {
//         let sorts = nums.sort((a,b)=> b - a)
//         console.log(sorts);
//     }
//
// }
//
// sortNums('descending')






//==================================================================================================================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let sort = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration)
// console.log(sort);

// let filter = coursesAndDurationArray.filter(c => c.monthDuration >= 5)
// console.log(filter);

// let map = coursesAndDurationArray.map ((value, index) => {
//     return {id: index + 1001, title: value.title, monthDuraction: value.monthDuration}
// });
// console.log(map);









//=================================================================================================================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [{
    cardSuit: 'spade',
    value: '6',
    color: 'black'
},
    {
    cardSuit: 'spade',
        value: '7',
    color: 'black'
},
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black'
    },

    {cardSuit: 'spade',
        value: '9',
        color: 'black'},

    {cardSuit: 'spade',
        value: '10',
        color: 'black'},

    {cardSuit: 'spade',
        value: 'jack',
        color: 'black'},

    {cardSuit: 'spade',
        value: 'queen',
        color: 'black'},
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black'
    },

    {cardSuit: 'clubs',
        value: '9',
        color: 'black'},

    {cardSuit: 'clubs',
        value: '10',
        color: 'black'},

    {cardSuit: 'clubs',
        value: 'jack',
        color: 'black'},

    {cardSuit: 'clubs',
        value: 'queen',
        color: 'black'},
    {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red'
    },

    {cardSuit: 'diamond',
        value: '9',
        color: 'red'},

    {cardSuit: 'diamond',
        value: '10',
        color: 'red'},

    {cardSuit: 'diamond',
        value: 'jack',
        color: 'red'},

    {cardSuit: 'diamond',
        value: 'queen',
        color: 'red'},
    {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red'
    },

    {cardSuit: 'heart',
        value: '9',
        color: 'red'},

    {cardSuit: 'heart',
        value: '10',
        color: 'red'},

    {cardSuit: 'heart',
        value: 'jack',
        color: 'red'},

    {cardSuit: 'heart',
        value: 'queen',
        color: 'red'},
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red'
    },
];
// let spadeAce = cards.find(c => c.value === 'ace')
// console.log(spadeAce);
//
// let allSix = cards.filter(c => c.value === '6')
// console.log(allSix);
//
// let diamondAll = cards.filter(c => c.cardSuit === 'diamond')
// console.log(diamondAll);

// let trefsNinePlus = cards.filter(c => c.value >= '9' && c.cardSuit ==='clubs')
// console.log(trefsNinePlus);


//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]

// let reduce = cards.reduce((accumulator, value) => {
//     cards.cardSuit = value.cardSuit
//
//     if (cards.cardSuit === 'spade') {
//         accumulator.spades.push(value)
//     }
//
//     if (cards.cardSuit === 'diamond') {
//         accumulator.diamonds.push(value)
//     }
//
//     if (cards.cardSuit === 'heart') {
//         accumulator.hearts.push(value)
//
//     }
//     if (cards.cardSuit === 'clubs') {
//         accumulator.clubs.push(value)
//     }
//     return accumulator;
//
// }, {spades:[], diamonds:[], hearts:[], clubs:[]});
//
// console.log(reduce)




// =====================================================================================================================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// first variant
// let dockerCourses = coursesArray.filter(course => course.modules.some(module => module ==='docker'))
// console.log(dockerCourses);
//
// let sassCourses = coursesArray.filter(course => course.modules.some(module => module ==='sass'))
// console.log(sassCourses);


// second variant
// let dockerCourses = coursesArray.filter(course => getCourseByModule(course.modules,'docker'))
// console.log(dockerCourses);
//
// function getCourseByModule(modulesArray, courseName){
//     return modulesArray.some(module => module === courseName)}

