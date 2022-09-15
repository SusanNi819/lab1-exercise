console.log('The website is working!');

let notecard = {
    noteTitle: 'This is important note',
    noteBody: 'This is the note body',
    noteImageURL: 'assets/warhol-tiger.png'
};

function updateElement() {
    notecard.noteElement = document.querySelector('#notecard-one');
    
    console.log("You have updated.");
    let noteImageElement = notecard.noteElement.querySelector(".notecard-thumbnail");
    console.log('note image:', noteImageElement);
    noteImageElement.src = notecard.noteImageURL;

    let noteTitleElement = notecard.noteElement.querySelector('.note-title');
    noteTitleElement.innerText = notecard.noteTitle;

    let noteBodyElement = notecard.noteElement.querySelector('.note-body');
    noteBodyElement.innerText = notecard.noteBody;
}

function submitNote() {
    console.log('You have submitted the note.');
    let editorTitleElement = document.querySelector('#note-editor-title');
    notecard.noteTitle = editorTitleElement.value;

    let editorBodyElement = document.querySelector('#note-editor-body');
    notecard.noteBody = editorBodyElement.value;

    updateElement();
}

let submitButton = document.querySelector('#btn-submit');
submitButton.onclick = submitNote;
