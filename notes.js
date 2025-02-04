const fs = require('fs');





var fetchNotes = () => {
    try{
        var notes = [];
        notes = JSON.parse(fs.readFileSync('notes_data.json'));
        return notes;
    } catch(e){
        console.log('error with the file');
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes_data.json', JSON.stringify(notes));
};

var addNotes = (title , body) => {
    var note = {
        title,
        body
    };
    var notes = fetchNotes();
    var dupNotes = notes.filter((note) => note.title === title);

    if(dupNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;    
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