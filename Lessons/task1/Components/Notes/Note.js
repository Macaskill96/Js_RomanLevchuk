let notes = [
    {date: '02.05.2015', note: 'Buy a car', category:'Task'},
    {date: '15.12.2015', note: 'Take a shower', category:'Idea'},
    {date: '01.01.2016', note: 'Wake up', category:'Task'},
    {date: '30.01.2016', note: 'Going to new job', category:'Task'},
    {date: '04.02.2016', note: 'Meet with friends', category:'Random Thought'},
    {date: '28.06.2017', note: 'Cooking', category:'Idea'},
    {date: '28.06.2022', note: 'Wash a cat', category:'Random Thought'}
];
let arrArchive = [];
const test1 = document.querySelector('.test1');

function findDates(text) {
    const dateRegex = /\b\d{2}[-./]\d{2}[-./]\d{4}\b/g;
    return text.match(dateRegex) || [];
}

function CreateBlockNotes () {
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';
    Counter();


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
            TransitionMinus();
            Delete(index);
        });

        let updateButton = document.createElement('button');
        updateButton.classList.add('button');
        updateButton.innerText = 'Update'
        updateButton.addEventListener('click', () => {
            Update(index);
        })

        let archiveButton = document.createElement('button')
        archiveButton.classList.add('button');
        archiveButton.innerText = 'to archive';
        archiveButton.addEventListener('click', () => {
            TransitionMinus();
            ToArchive(index);
        } )

        let filter = note.note
        let foundDate = findDates(filter);
        divDate.innerText = note.date;
        divNotes.innerText = note.note;
        divCategory.innerText = note.category;
        divDates.innerText = foundDate.join(', ')
        forButton.append(deleteButton, updateButton, archiveButton)
        container.append(divDate, divNotes, divCategory, divDates, forButton);
        notesContainer.appendChild(container);


    })
}

function Counter() {
    let {'Task': ActiveTask, 'Random Thought': RandomThought, 'Idea': ActiveIdea} = CategoryCount(notes);
    let {'Task': ArchiveTask, 'Random Thought': ArchiveThought, 'Idea': ArchiveIdea} = CategoryCount(arrArchive);

    let taskActive = document.getElementById('taskActive');
    taskActive.innerText = ActiveTask || '0';
    let ranActive = document.getElementById('ranActive');
    ranActive.innerText = RandomThought || '0';
    let ideaActive = document.getElementById('ideaActive');
    ideaActive.innerText = ActiveIdea || '0';

    let taskArchive = document.getElementById('taskArchive');
    taskArchive.innerText = ArchiveTask || '0';
    let ranArchive = document.getElementById('ranArchive');
    ranArchive.innerText = ArchiveThought || '0';
    let ideaArchive = document.getElementById('ideaArchive');
    ideaArchive.innerText = ArchiveIdea || '0';
}
Counter();

function CategoryCount(arr) {
    let taskCount = 0;
    let randomThoughtCount = 0;
    let ideaCount = 0;

    arr.forEach(item => {
        switch (item.category) {
            case 'Task':
                taskCount++;
                break;
            case 'Random Thought':
                randomThoughtCount++;
                break;
            case 'Idea':
                ideaCount++;
                break;
            default:
                break;
        }
    });

    return {
        'Task': taskCount,
        'Random Thought': randomThoughtCount,
        'Idea': ideaCount
    };
}


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



CreateBlockNotes();

