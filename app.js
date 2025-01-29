console.log('Starting App');

const fs = require('fs');

const os = require('os');

const _ = require('loadsh');

const yargs = require('yargs');

const notes = require('./notes.js');
const { title } = require('process');

const argv = yargs.argv;



var command = argv._[0];
console.log('command is: ' , command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add'){
    console.log('adding new note');
    notes.addNotes(argv.title, argv.body);
}else if(command === 'list'){
    console.log('listing all notes');
    notes.getAll();
}else if (command === 'read'){
    console.log('reading note');
    notes.getNote(argv.title);
}else if (command === 'remove'){
    console.log('removing note');
    notes.removeNote(argv.title);
}else{
    console.log('command not recognized')
}