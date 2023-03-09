//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".
//
//
// let form = document.forms.task1
// form.onsubmit = function (eo) {
//     eo.preventDefault();
//     let element = document.getElementById('text')
//     element.remove()
// }


// =================================================================================
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
//     з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


// let forms = document.forms.task2
// forms.onsubmit = function() {
//     if (this.age.value < 18 ) {
//          return alert('Watch the cartoon')
//     } else {
//         alert('You are welcome')
//     }
// }


//
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// let forma = document.createElement('div');
// let form = document.forms.find
// form.onsubmit = function (eo) {
//     eo.preventDefault();
//     console.log(form.name.value);
//     console.log(form.surname.value);
//     console.log(form.age.value);
//     forma.append(form);
//     let textName = document.createElement('p')
//     textName.innerText = `Name: ${form.name.value}, Surname: ${form.surname.value}, Age: ${form.age.value}`
//     form.append(textName)
//     document.body.append(forma)
//
// };


// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1

// let cons = localStorage.getItem('num') || 0;
// let element = document.getElementById('num');
// let newNum = (+cons +1).toString();
// element.innerText = newNum;
// localStorage.setItem('num', newNum)


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація
// про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
//
// let file = localStorage.getItem('sessions');
// let sessions = file ? JSON.parse(file): [];
// sessions.push({
//     date: new Date().toUTCString()
// });
// localStorage.setItem('sessions', JSON.stringify(sessions));


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

//
// const my_array = [];
//
// for (let i = 0; i < 100; i++) {
//     const obj = { name: `Object ${i}` };
//     my_array.push(obj);
// }
//
// let page = 1;
//
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');
// prev.addEventListener('click', () => change(page -= 1));
// next.addEventListener('click', () => change(page += 1));
// change(page);
//
// function change (page, limit = 10) {
//     let face = document.getElementById('divka');
//     face.classList.add('divkas')
//     let newArr = [];
//     let startText = (page - 1) * limit;
//     let endText = page * limit;
//     for (let i = startText; i < endText; i++) {
//         let location = my_array[i];
//         let html = document.createElement('div')
//         html.classList.add('html')
//         let polosa = document.createElement('div');
//         polosa.innerText = `${location.name}`;
//         html.append(polosa)
//
//         newArr.push(html);
//         document.body.append(html);
//     }
//     face.replaceChildren(...newArr)
//
// }

//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)