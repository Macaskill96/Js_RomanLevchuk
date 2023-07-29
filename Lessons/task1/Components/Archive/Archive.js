
function ToArchive(index) {
    let element = notes[index];
    arrArchive.push(element);
    Delete(index);

    let last = arrArchive[arrArchive.length - 1];

    const archiveContainer = document.getElementById('archiveArr');
    let container = document.createElement('div');
    container.classList.add('noteDiv');
    let title = document.createElement('h3')
    title.innerText = 'Archived'
    let divDate = document.createElement('div');
    divDate.classList.add('date');
    let divNotes = document.createElement('div');
    divNotes.classList.add('notes');
    let divCategory = document.createElement('div');
    divCategory.classList.add('categories');
    let divDates = document.createElement('div');
    divDates.classList.add('dates');
    let forButton = document.createElement('div');
    forButton.classList.add('forButton');
    let unzip = document.createElement('button');
    unzip.classList.add('button');
    unzip.innerText = 'Unzip';
    unzip.addEventListener('click', Unzip);

    let filter = last.note;
    let foundDate = findDates(filter);

    divDate.innerText = last.date;
    divNotes.innerText = last.note;
    divCategory.innerText = last.category;
    divDates.innerText = foundDate;

    forButton.append(unzip);
    container.append(divDate, divNotes, divCategory, divDates, forButton);
    archiveContainer.append(container);


    Counter();


    function Unzip() {
        TransitionPlus();
        notes.push(last);
        CreateBlockNotes();
        archiveContainer.removeChild(container);
        arrArchive.pop();
        Counter();
    }



}




