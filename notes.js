const fs = require('fs');

var addNotes = (title , body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    notes.push(note);
    fs.writeFileSync('notes_data.json', JSON.stringify(notes));
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