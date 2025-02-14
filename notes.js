const fs = require('fs');


var logNote = (note) => {
    debugger;
    console.log('title: ', note.title);
    console.log('body: ',note.body);
};

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
    return fetchNotes();
};

var getNote = (title) => {
    console.log('Getting the note', title);
    var notes = fetchNotes();
    var note = notes.find((note)=> note.title === title);
    return note;
};

var removeNote = (title)=> {
    var notes = fetchNotes();
    var index = notes.findIndex((note) => note.title === title)
    if(index === -1){
      console.log('Note doesn\'t exist');
      return;
    }
    notes.splice(index,1);
    saveNotes(notes);
    console.log('Removed the note', title);
};

module.exports = {
    addNotes : addNotes,
    getAll : getAll,
    getNote : getNote,
    removeNote : removeNote,
    logNote : logNote
};