class Notecard{
    title;
    body;
    imageURL;
    element;

    constructor (title, body, img, elementID) {
        this.title = title;
        this.body = body;
        this.imageURL = img;
        this.element = document.querySelector(elementID);
    }

    updateElement() {
        let noteTitleElement = this.element.querySelector('.note-title');
        noteTitleElement.innerText = this.title;

        let noteBodyElement = this.element.querySelector('.note-body');
        noteBodyElement.innerText = this.body;

        let noteImageElement = this.element.querySelector('.notecard-thumbnail');
        noteImageElement.src = this.imageURL;
    }
}

let notecardOne = new Notecard (
    "This is the First Note", 
    "This is the body of the first note.", 
    "assets/warhol-frog.png", 
    "#notecard-one"
);

let notecardTwo = new Notecard (
    "This is the Second Note", 
    "This is the body of the second note.", 
    "assets/warhol-eagle.png", 
    "#notecard-two"
);

let notecardThree = new Notecard (
    "This is the Third Note", 
    "This is the body of the third note.", 
    "assets/warhol-tiger.png", 
    "#notecard-three"
);

let notecards = [
    notecardOne,
    notecardTwo,
    notecardThree
];

for (let i = 0; i < notecards.length; i += 1) {
    let notecard = notecards[i];
    notecard.updateElement();
}