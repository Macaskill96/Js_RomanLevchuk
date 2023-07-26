function Update (index) {
    let x = notes.at(index);
    let oldText = x.note;
    let text = inputData.value;
    let newText = text.replace(oldText)
    x.note = newText;
    CreateBlockNotes();

}

function SaveData(e) {
    e.preventDefault();
    let formData = formatDate();
    let category = document.getElementById('categorySelect').value;
    let note = document.getElementById('inputSelect').value;
    let date = `${formData.DD}.${formData.MM}.${formData.YYYY}`
    console.log(note);

    const newData = {date, note, category};
    newArr.push(newData);
    notes.push(...newArr);
    newArr = [];

    document.getElementById('categorySelect').value = 'Task';
    document.getElementById('inputSelect').value = '';
    button.disabled = true;
    CreateBlockNotes();

};


function hundleSubmit (isSave) {
    if (isSave) {
        SaveData();
    }
    else {
        Update();
    }
}