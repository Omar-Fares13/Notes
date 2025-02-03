const fs = require('fs');

var notes = [];

notes = JSON.parse(fs.readFileSync('notes_data.json'));


var addNotes = (title , body) => {
    var note = {
        title,
        body
    };
    var dupNotes = notes.filter((note) => note.title === title);

    if(dupNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes_data.json', JSON.stringify(notes));        
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting the note', title);
};

var removeNote = (title)=> {
    console.log('Removed the note', title);
};

module.exports = {
    addNotes : addNotes,
    getAll : getAll,
    getNote : getNote,
    removeNote : removeNote
};