// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//

let url1 = new URL(location.href);
let json = url1.searchParams.get('data');
let user = JSON.parse(json);
let osnova = document.createElement('div')
osnova.classList.add('osnova')
let userPots = document.createElement('div')
userPots.classList.add('clases')
userPots.style.order = '1';


let id1 = document.createElement('p')
let nameUser = document.createElement('p')
let username = document.createElement('p')
let email = document.createElement('p')
let adress = document.createElement('p')
let phone = document.createElement('p')
let website  = document.createElement('p');
let company = document.createElement('p')

id1.innerText = `ID: ${user.id}`
nameUser.innerText = `Name: ${user.name}`
username.innerText = `Username: ${user.username}`
email.innerText = `Email: ${user.email}`
adress.innerText = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode},
   Geo: ${user.address.geo.lat}, ${user.address.geo.lng}`;
phone.innerText = `Phone: ${user.phone}`
website.innerText = `Website: ${user.website}`
company.innerText = `Company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`
userPots.append(id1, nameUser, username, email, adress, phone, website, company)
osnova.appendChild(userPots)


let click = document.forms.one
click.onclick = function (eo) {
    eo.preventDefault();
    let userID = user.id;
    let newURL = 'https://jsonplaceholder.typicode.com/users/' + userID + '/posts'
    let xhr = new XMLHttpRequest();
    xhr.open('GET', newURL);
    xhr.send();
    fetch(newURL)
        .then(value => value.json())
        .then(posts => {
            let postDiv = document.createElement('div')
            postDiv.id = 'adder'
            postDiv.style.order = '3';
            let titleDiv = document.createElement('h3')
            titleDiv.innerText = `Post Title`
            postDiv.append(titleDiv)
            for (const post of posts) {
                let infoPost = document.createElement('a')
                infoPost.href = 'post-details.html?data=' + JSON.stringify(post)
                let titlePost = document.createElement('p')
                titlePost.innerText = `${post.title}`
                infoPost.append(titlePost)
                postDiv.appendChild(infoPost)
                document.body.appendChild(postDiv)

            }
        })

}
osnova.appendChild(click)
document.body.appendChild(osnova)