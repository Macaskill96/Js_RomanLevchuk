//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//



let url2 = new URL(location.href);
let json = url2.searchParams.get('data');
let post = JSON.parse(json);

let info_post = document.createElement('div')
let userID = document.createElement('p')
let id = document.createElement('p')
let postTitle = document.createElement('p')
let postBody = document.createElement('p')

userID.innerText = `UserId: ${post.userId}`
id.innerText = `ID: ${post.id}`
postTitle.innerText = `Title: ${post.title}`
postBody.innerText = `Body: ${post.body}`

info_post.append(userID, id, postTitle, postBody)
document.body.appendChild(info_post)


let postId = post.id;
let addUrl = 'https://jsonplaceholder.typicode.com/posts/' + postId+ '/comments'
let xhr = new XMLHttpRequest()
xhr.open('GET', addUrl)
xhr.send();
fetch(addUrl)
.then(value => value.json())
.then(postComent => {

    let block = document.createElement('div')
    let h3 = document.createElement('h3')
    h3.innerText = `Comments:`
    block.append(h3)
    for (const comentDetails of postComent) {
        let idComment = document.createElement('p')
        idComment.innerText = `ID: ${comentDetails.id}`
        let nameComment = document.createElement('p')
        nameComment.innerText = `Name: ${comentDetails.name}`
        let emailComment = document.createElement('p')
        emailComment.innerText = `Email: ${comentDetails.email}`
        let bodyComment = document.createElement('p')
        bodyComment.innerText = `Body: ${comentDetails.body}`
        block.append(idComment, nameComment, emailComment, bodyComment)
        document.body.appendChild(block)
    }
})