const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgWhite.black("     YOUR NOTES     "));
  notes.forEach(note => console.log(chalk.bold("Note: ") + note.title));
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.bgGreen.white("Note added"));
  } else {
    console.log(chalk.bgRed.white("ERROR") + chalk.red(" Title already taken"));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length === notesToKeep.length) {
    console.log(chalk.bgRed.white("ERROR") + chalk.red(" Title not found"));
  } else {
    saveNotes(notesToKeep);
    console.log(chalk.bgGreen.white("Note removed"));
  }
};

const readNote = title => {
  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title);

  if (noteToRead) {
    console.log(chalk.inverse("        NOTE        "));
    console.log(chalk.bold("Note: ") + noteToRead.title);
    console.log(chalk.bold("Description: ") + noteToRead.body);
  } else {
    console.log(chalk.bgRed.white("ERROR") + chalk.red(" Title not found"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote
};
