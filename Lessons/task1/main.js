


let category = ['Task', 'Random Thought', 'Idea'];
let notes = [
    {date: '02.05.2015', note: 'Buy a car', category:'Task'},
    {date: '15.12.2015', note: 'Take a shower', category:'Idea'},
    {date: '01.01.2016', note: 'Wake up', category:'Task'},
    {date: '30.01.2016', note: 'Going to new job', category:'Task'},
    {date: '04.02.2016', note: 'Meet with friends', category:'Random Thought'},
    {date: '28.06.2017', note: 'Cooking', category:'Idea'}
];


function formatDate () {
    const YYYY = new Date().getFullYear().toString();
    const MM = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const DD = new Date().getDate().toString().padStart(2, '0');

    return {YYYY, MM, DD};
}
function findDates(text) {
    const dateRegex = /\b\d{2}[-.]\d{2}[-.]\d{4}\b/g;
    return text.match(dateRegex) || [];
}


let list = document.getElementById('categorySelect');
let select = category.map(c => {
    let optionElement = document.createElement('option');
    optionElement.innerText = c;
    list.appendChild(optionElement)
});

function CreateBlockNotes () {
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';
    let divNotes = notes.map(note => {
        let container = document.createElement('div');
        container.classList.add('noteDiv');
        let divDate = document.createElement('div');
        divDate.classList.add('date')
        let divNotes = document.createElement('div');
        divNotes.classList.add('notes')
        let divCategory = document.createElement('div');
        divCategory.classList.add('categories')
        let divDates = document.createElement('div');
        divDates.classList.add('dates')
        let forButton = document.createElement('div')
        forButton.classList.add('forButton')

        let filter = note.note
        let foundDate = findDates(filter);
        console.log(foundDate);

        divDate.innerText = note.date;
        divNotes.innerText = note.note;
        divCategory.innerText = note.category;
        forButton.innerHTML = '<button class="button">Delete</button> <button class="button">Edit</button>'
        container.append(divDate, divNotes, divCategory, divDates, forButton);
        notesContainer.appendChild(container)
    })
}
CreateBlockNotes();

let newArr = [];
const button = document.getElementById('button')
button.addEventListener('click', SaveData)
let inputData = document.getElementById('inputSelect');

function SaveData(e) {
    e.preventDefault();
    let formData = formatDate();
    let category = document.getElementById('categorySelect').value;
    let note = document.getElementById('inputSelect').value;
    let date = `${formData.DD}.${formData.MM}.${formData.YYYY}`

    const newData = {date, note, category};
    newArr.push(newData);
    notes.push(...newArr);
    newArr = [];

    document.getElementById('categorySelect').value = 'Task';
    document.getElementById('inputSelect').value = '';
    button.disabled = true;
    CreateBlockNotes();

};







inputData.addEventListener('input', function () {
    if (inputData.value.trim() !== '') {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
})


//
// let container = document.createElement('div');
// container.classList.add('container')
// document.body.appendChild(container);
//
// let form = document.createElement('div');
// container.appendChild(form);
//
// let inputs = document.forms.formForNote;
// inputs.onsubmit = function (eo) {
//     eo.preventDefault();
//
//     let forDate = document.createElement('div');
//     let dateNote = document.createElement('div');
//     let forNote = document.createElement('div');
//     let forCategory = document.createElement('div');
//
//     let selectedCategory = list.options[list.selectedIndex].text;
//     let noteText = document.createElement('p');
//     noteText.innerText = `${inputs.note.value}`;
//
//     let date = formatDate();
//     dateNote.innerText = `${date.YYYY}, ${date.MM}, ${date.DD}`;
//     forDate.append(dateNote);
//
//     forNote.appendChild(noteText);
//     forCategory.innerText = selectedCategory;
//
//     let entryBlock = document.createElement('div');
//     entryBlock.classList.add('entry-block');
//     entryBlock.append(forDate, forNote, forCategory);
//
//     container.appendChild(entryBlock);
//
//
//     inputs.note.value = '';
// };
