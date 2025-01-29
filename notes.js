const fs = require('fs');

var addNotes = (title , body) => {
fs.appendFile('hi.txt' , title + ' : ' + body , err => {
    if(err){
        console.log("error")
    }
});
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