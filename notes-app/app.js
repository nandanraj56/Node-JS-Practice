const notes = require('./notes.js');
const yargs = require('yargs');


//Customize yargs version
yargs.version('1.2');// just visual purpose

//Commands:- add remove list read


yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title:{
            describe:'Title for note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe: 'Body for note',
            demandOption:true,
            type:'string'

        }

    },
    handler:(argv)=>{
        //console.log('Title: '+ argv.title);
        //console.log('Body: '+argv.body);
       notes.addNotes(argv.title,argv.body);
    }
});
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe: 'Title to search and delete note',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        //console.log('note deleted');
        notes.removeNote(argv.title);
    }
});
yargs.command({
    command:'read',
    describe:'Reads a note ',
    builder:{
        title:{
            describe: 'Title to search and read note',
            demandOption: true,
            type:'string'
        },
    },
    handler:(argv)=>{
        notes.readNote(argv.title);
        //console.log('Reading a note');
    },
});
yargs.command({
    command:'list',
    describe:'List all note',
    handler:()=>{
        notes.listNotes();
    }
});


yargs.parse();
//console.log(yargs.argv)