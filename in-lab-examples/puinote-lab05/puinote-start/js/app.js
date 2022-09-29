class Notecard {
    title;
    body;
    image;
    element;

    constructor (title, body, imageURL){
        this.title = title;
        this.body = body;
        this.imageURL = imageURL;
    }

    createElement(deleteFunction) {
        console.log('create');
        let template = document.querySelector('#notecard-template');
        let clone = template.content.cloneNode(true);
        this.element = clone.querySelector('.notecard');

        let container = document.querySelector('#notecard-list');
        container.prepend(this.element);

        let deleteButton = this.element.querySelector('.icon-delete');
        deleteButton.addEventListener('click', deleteFunction);

        this.updateElement();
    }
    updateElement() {
        let noteImageElement = this.element.querySelector('.notecard-thumbnail');
        noteImageElement.src = this.imageURL;
    
        let notecardTitleElement = this.element.querySelector('.note-title');
        notecardTitleElement.innerText = this.title;
    
        let notecardBodyElement = this.element.querySelector('.note-body');
        notecardBodyElement.innerText = this.body;
    }
    removeElement() {
        this.element.remove();
    }
}


let notecardSet = new Set();

function addNewNote(title, body, imageURL) {
    let notecard = new Notecard(title, body, imageURL);
    notecardSet.add(notecard);
    return notecard;
}

function deleteNote(notecard) {
    notecard.removeElement();
    notecardSet.delete(notecard);
}

let notecardOne = addNewNote(
    'My first Note',
    'my first note is very short',
    'assets/warhol-butterfly.png'
);

console.log(notecardSet);

for (let item of notecardSet) {
    item.createElement(() => {
        deleteNote(item)
});
}