const chalk = require('chalk');

const fs = require('fs');
const getNotes = ()=>{
    return 'Your Notes...';
}
const addNotes = (title, body) =>{
    const notes = loadNotes();
    const duplicateNote = notes.find((note)=>{
        return title === note.title;
    });
    console.log(duplicateNote);
    if(typeof(duplicateNote)=== "undefined"){
        notes.push({
            title:title,
            body:body,
        });
    
        saveNotes(notes);
        console.log(chalk.bgGreen('Note added!'));
    }
    else{
        console.log(chalk.bgRed('Duplicate note!'));
    }
    

}
const removeNote = (title) =>{
    //console.log("remove "+ title);
    let notes = loadNotes();
    let flag = false;
    notestokeep = notes.filter((note)=>{
        if(note.title !== title){
            
            return true;
        }
        flag = true;
        return false;
    });
    if(flag){
        console.log(chalk.bgGreen('Note Removed!'));
        saveNotes(notestokeep);
    }else{
        console.log(chalk.bgRed('No Note Found!'));
    }
    

}
const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.green('Your Notes!'))
    notes.forEach(element => {
        console.log(element.title);
    });
}
const readNote = (title) =>{
    const notes = loadNotes();
    //console.log(notes);
    const noteFound = notes.find((note)=>{
        return title === note.title;
    });
    if(!noteFound)
        console.log(chalk.red('No Note found'));
    else{
        console.log(chalk.green(noteFound.title));
        console.log(noteFound.body);
    }
}
const saveNotes = (notes) =>{
    fs.writeFileSync('notes.json',JSON.stringify(notes));
}
const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer.toString());
    }
    catch(e){
        return [];
    }
    
}

module.exports = {
    addNotes: addNotes,
    getNotes:getNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote,
};