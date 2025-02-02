// var obj = {
//     name: 'omar'
// };

// var personString = '{"name":"omar","age": 22}';

// var stringObj = JSON.stringify(obj);

// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);