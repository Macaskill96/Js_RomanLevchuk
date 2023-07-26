


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
    const dateRegex = /\b\d{2}[-./]\d{2}[-./]\d{4}\b/g;
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
    let divNotes = notes.map((note, index) => {
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

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            Delete(index);
        });

        let updateButton = document.createElement('button');
        updateButton.classList.add('button');
        updateButton.innerText = 'Update'
        updateButton.addEventListener('click', () => {
         Update(index);
        })

        let filter = note.note
        let foundDate = findDates(filter);

        divDate.innerText = note.date;
        divNotes.innerText = note.note;
        divCategory.innerText = note.category;
        divDates.innerText = foundDate
        forButton.append(deleteButton, updateButton)
        container.append(divDate, divNotes, divCategory, divDates, forButton);
        notesContainer.appendChild(container);
    })
}


let inputData = document.getElementById('inputSelect');
const button = document.getElementById('button')
let changeText = true;

function ChangeButton () {
    const action = button.getAttribute('data-action')
    if (action === 'create') {
        button.innerText = 'Create';
        button.disabled = changeText;
        button.removeEventListener('click', SaveNewNote);
        button.addEventListener('click', SaveData)
    } else if (action === 'update') {
        button.innerText = 'Save'
        button.disabled = changeText;
        button.removeEventListener('click', SaveData)
        button.addEventListener('click', SaveNewNote)
    }
}
ChangeButton();

function SaveData(e) {
    e.preventDefault();
    button.setAttribute('data-action', 'create');
    let formData = formatDate();
    let category = document.getElementById('categorySelect').value;
    let note = document.getElementById('inputSelect').value;
    let date = `${formData.DD}.${formData.MM}.${formData.YYYY}`;
    let newData = {date, note, category};

    notes.push(newData);
    document.getElementById('categorySelect').value = 'Task';
    document.getElementById('inputSelect').value = '';
    button.disabled = false;
    CreateBlockNotes();

    changeText = false;
    ChangeButton();

};


function Delete (index) {
    notes.splice(index,1)
    CreateBlockNotes();
}


let valueIndex;
function Update (index) {
    button.setAttribute('data-action', 'update')
    const test = notes.map((note, index) => {
        return `${note.note}`
    })

    let oldInput = inputData.value = test[index];
    let indexOf = test.indexOf(test[index])
    valueIndex = indexOf;
    button.disabled = true;
    changeText = false;
    ChangeButton();
}


function SaveNewNote (e) {
    e.preventDefault();
    let index = valueIndex;
    const valueInput = document.getElementById('inputSelect').value;

    if (index >=0 && index < notes.length) {
        notes[index].note = valueInput;
        document.getElementById('categorySelect').value = 'Task';
        document.getElementById('inputSelect').value = '';
        button.disabled = true;
        CreateBlockNotes();
    } else {
        console.error('You have a problem');
    }

    button.setAttribute('data-action', 'create');
    changeText = true;
    ChangeButton();
}

inputData.addEventListener('input', function () {
    if (inputData.value.trim() !== '') {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
})
CreateBlockNotes();

