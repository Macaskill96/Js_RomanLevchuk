//
// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули



let url = new URL('https://jsonplaceholder.typicode.com/users')
fetch(url)
    .then(value => value.json())
    .then(users =>{
        for (let userElements of users) {
            let div = document.createElement('div')
            div.classList.add('userElement')
            let pID = document.createElement('p')
            pID.classList.add('pID')
            let pName = document.createElement('p')
            pName.classList.add('pName')
            let a = document.createElement('a');
            a.href = 'user-details.html?data=' + JSON.stringify(userElements);
            pID.innerText = `ID: ${userElements.id}`
            pName.innerText = `Name: ${userElements.name}`
            a.append(pID, pName)
            div.append(a);
            document.body.append(div)
        }
    })


// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)