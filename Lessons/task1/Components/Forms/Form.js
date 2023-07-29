let category = ['Task', 'Random Thought', 'Idea'];
function formatDate () {
    const YYYY = new Date().getFullYear().toString();
    const MM = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const DD = new Date().getDate().toString().padStart(2, '0');

    return {YYYY, MM, DD};
}

let list = document.getElementById('categorySelect');
let select = category.map(c => {
    let optionElement = document.createElement('option');
    optionElement.innerText = c;
    list.appendChild(optionElement)
});


let inputData = document.getElementById('inputSelect');
const button = document.getElementById('button')
let changeText = true;

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

function ChangeButton () {
    const action = button.getAttribute('data-action')
    if (action === 'create') {
        button.innerText = 'Create';
        button.disabled = changeText;
        button.removeEventListener('click', SaveNewNote);
        button.addEventListener('click', SaveData)
        button.addEventListener('click', TransitionPlus)
    } else if (action === 'update') {
        button.innerText = 'Save'
        button.disabled = changeText;
        button.removeEventListener('click', SaveData)
        button.removeEventListener('click', TransitionPlus)
        button.addEventListener('click', SaveNewNote)
    }
}
ChangeButton();

inputData.addEventListener('input', function () {
    if (inputData.value.trim() !== '') {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
})
function SaveData(e) {
    try {
        e.preventDefault();
        button.setAttribute('data-action', 'create');
        let formData = formatDate();
        let category = document.getElementById('categorySelect').value;
        let note = document.getElementById('inputSelect').value;
        let date = `${formData.DD}.${formData.MM}.${formData.YYYY}`;
        let newData = {date, note, category};

        if (category.trim() === '' || note.trim() === '') {
            throw new Error('The category and notes fields cannot be empty.');
        }

        notes.push(newData);
        document.getElementById('categorySelect').value = 'Task';
        document.getElementById('inputSelect').value = '';
        button.disabled = false;
        CreateBlockNotes();

        changeText = false;
        ChangeButton();

    } catch (error) {
        console.error('Your problem', error.message);
    }
}
function TransitionPlus() {
    let tes = test1.clientHeight + 45
    test1.style.height = `${tes}px`;
}
function TransitionMinus() {
    let tes = test1.clientHeight - 45
    test1.style.height = `${tes}px`;
}

