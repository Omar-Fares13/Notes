const fs = require('fs');

const os = require('os');

const _ = require('loadsh');

const yargs = require('yargs');

const notes = require('./notes.js');
const { title } = require('process');

const argv = yargs.argv;

var command = argv._[0];

if(command === 'add'){
    console.log('adding new note');
    var note = notes.addNotes(argv.title, argv.body);
    if(note){
        console.log('note created.')
        notes.logNote(note);
    }else{
        console.log('note title already in use.')
    }
}else if(command === 'list'){
    console.log('listing all notes');
    var allNotes = notes.getAll();
    allNotes.forEach((node) => {
        notes.logNote(node);
    });
}else if (command === 'read'){
    console.log('reading note');
    var note = notes.getNote(argv.title);
    if(note){
        notes.logNote(note);
    }else{
        console.log('Note not found.');
    }
}else if (command === 'remove'){
    console.log('removing note');
    notes.removeNote(argv.title);
}else{
    console.log('command not recognized')
}