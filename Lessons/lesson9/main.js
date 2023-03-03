// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let div1 = document.createElement('div')
// console.log(div1);
// div1.classList.add('wrap', 'collapse', 'alpha', 'beta');
// div1.style.background = 'silver';
// div1.style.textDecoration = 'red';
// div1.style.fontSize = '15px';
// div1.style.width = '100%';
// div1.style.height = '100px';
// document.body.append(div1);
//
// let div1_Clone = div1.cloneNode(true);
// document.body.append(div1_Clone);





//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//
//
// let arr = ['Main', 'Products', 'About us', 'Contacts'];
// let divGeneral = document.createElement('div')
// let divList = document.createElement('div')
// let arrUl = document.createElement('ul');
// document.body.appendChild(divGeneral);
// divGeneral.classList.add('divGen');
// divList.classList.add('divLists')
// for (let arrEl of arr) {
//     let listLi = document.createElement('li')
//     listLi.innerText = `${arrEl}`
//     arrUl.append(divList);
//     divGeneral.append(arrUl);
//     divList.append(listLi)
//
// }








// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// let divPlusElement = document.createElement('div');
// divPlusElement.classList.add('task3');
// for (let arrElements of coursesAndDurationArray) {
//
//     let divElements = document.createElement('div');
//     let text = document.createElement('h3');
//     text.innerText = `title: ${arrElements.title}, monthDuraction: ${arrElements.monthDuration}`;
//     divElements.classList.add('task3plus')
//     divElements.append(text);
//     divPlusElement.append(divElements);
//     document.body.appendChild(divPlusElement);
//
// }





// =========================
//
//     - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// let div = document.createElement('div')
// div.classList.add('first');
// for (let arrayElement of coursesAndDurationArray) {
//     let item = document.createElement('div');
//     item.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = `${arrayElement.title}`;
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = `monthDuraction: ${arrayElement.monthDuration}`;
//     item.append(h1, p);
//     div.appendChild(item);
//     document.body.append(div);
//
// }





//
//

//
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
//
// let sim = document.createElement('div');
// sim.classList.add('sim');
// for (let simpson of simpsons) {
//     let member = document.createElement('div');
//     member.classList.add('member')
//     let h1 = document.createElement('h1');
//     h1.classList.add('names');
//     h1.innerText = `${simpson.name} ${simpson.surname}`;
//     let img = document.createElement('img');
//     img.src = `${simpson.photo}`;
//     img.classList.add('photo')
//     let age = document.createElement('h4');
//     age.classList.add('ages');
//     age.innerText = `Age: ${simpson.age}`;
//     let p = document.createElement('p')
//     p.classList.add('pishka');
//     p.innerText = `${simpson.info}`
//     member.append(h1, img, age, p);
//     sim.append(member);
//     document.body.append(sim)
//
// }




// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом


// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// let div = document.createElement('div')
// div.classList.add('osnovna');
// for (let coursesArrayElement of coursesArray) {
//     let divTitle = document.createElement('div');
//     let title1 = document.createElement('h1');
//     divTitle.append(title1);
//     divTitle.classList.add('divTitle');
//     title1.innerText = `${coursesArrayElement.title}`;
//     title1.classList.add('textClass');
//
//
//     let divMonth = document.createElement('div');
//     let divMonth1 = document.createElement('h2')
//     divMonth.append(divMonth1);
//     divMonth.classList.add('divMonth');
//     divMonth1.innerText = `MonthDuraction: ${coursesArrayElement.monthDuration}`;
//     divMonth1.classList.add('textClass');
//
//
//     let divHour = document.createElement('div');
//     let divHour1 = document.createElement('h2');
//     divHour.append(divHour1);
//     divHour.classList.add('divHour');
//     divHour1.innerText = `HourDuraction: ${coursesArrayElement.hourDuration}`;
//     divHour1.classList.add('textClass');
//
//
//     let module = document.createElement('div');
//     let  module11 = document.createElement('h2');
//     module.append(module11);
//     module11.innerText = `Modules:`;
//     module11.classList.add('textClass');
//     let ulModule = document.createElement('ul');
//     module.append(ulModule);
//     module.classList.add('module2');
//     let modules = coursesArrayElement.modules;
//     for (let module1 of modules) {
//         let item = document.createElement('li');
//         item.innerText = `${module1}`;
//         ulModule.appendChild(item);
//     div.append(divTitle, divMonth, divHour, module);
//     document.body.append(div);
//
//     }
//
// }