import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const NOTES_KEY = 'notes';
_createNotes()


export const noteService = {
    query,
    save,
    remove,
    setBgc,
    setTxt,
    setTodos,
    duplicateNote,
    addNewNote


}



function query() {
    return storageService.query(NOTES_KEY);
}



function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: `Fullstack Me Baby!`
                },
                style: {
                    bgc: "#ffffff"
                }
            },
            {
                id: "n102",
                type: "note-img",
                isPinned: false,
                info: {
                    title: "My Sweet Dog",
                    url: "./img/mydog.jpg",
                },
                style: {
                    bgc: "#ffffff"
                }
            },
            {
                id: "n103",
                type: "note-todos",
                isPinned: false,
                info: {
                    title: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", done: false },
                        { txt: "Coding power", done: true }
                    ]
                },
                style: {
                    bgc: "#ffffff"
                }
            },
            {
                id: "n104",
                type: "note-todos",
                isPinned: false,
                info: {
                    title: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", done: false },
                        { txt: "Coding power", done: true }
                    ]
                },
                style: {
                    bgc: "#ffffff"
                }
            },
            {
                id: "n105",
                type: "note-todos",
                isPinned: false,
                info: {
                    title: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", done: false },
                        { txt: "Coding power", done: true }
                    ]
                },
                style: {
                    bgc: "#ffffff"
                }
            },
            {
                id: "n106",
                type: "note-img",
                isPinned: false,
                info: {
                    title: "My Ex",
                    url: "./img/myex.jpg",

                },
                style: {
                    bgc: "#ffffff"
                }
            },
            {
                id: "n107",
                type: "note-todos",
                isPinned: false,
                info: {
                    title: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", done: false },
                        { txt: "Coding power", done: true }
                    ]
                },
                style: {
                    bgc: "#ffffff"
                }
            },
            {
                id: "n108",
                type: "note-img",
                isPinned: false,
                info: {
                    title: "cat",
                    url: "./img/cat.webp"

                },
                style: {
                    bgc: "#ffffff"
                }
            }
        ];

        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}

function save(note) {
    if (note.id) return storageService.put(NOTES_KEY, note);
    else return storageService.post(NOTES_KEY, note);
}


function getNoteById(noteId) {
    return storageService.get(NOTES_KEY, noteId);
}

function addNewNote(note) {
    let newNote
    switch (note.type) {
        case 'note-txt':
            newNote = {
                id: null,
                type: "note-txt",
                isPinned: false,
                info: {
                    title: note.info.title,
                },
                style: {
                    bgc: '#ffffff'
                }
            }
            break
        case 'note-todos':
            let data = note.info.title.split(',')
            let newTodos = []
            data.forEach(todo => {
                newTodos.push({ txt: todo, done: false })
            });
            newNote = {
                id: null,
                type: "note-todos",
                isPinned: false,
                info: {
                    title: 'Click to edit',
                    todos: newTodos
                },
                style: {
                    bgc: '#ffffff'
                }
            }
            break
        case 'note-img':
            newNote = {
                id: null,
                type: "note-img",
                isPinned: false,
                info: {
                    url: note.info.title,
                    title: "Click to edit"
                },
                style: {
                    bgc: '#ffffff'
                }
            }
            break
        case 'note-video':
            newNote = {
                id: null,
                type: "note-video",
                isPinned: false,
                info: {
                    url: note.info.title,
                    title: "Click to edit"
                },
                style: {
                    bgc: '#ffffff'
                }
            }
            break
    }
    return save(newNote)
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}

function setBgc(noteId, color) {
    return getNoteById(noteId)
        .then(note => {
            note.style.bgc = color
            return note
        })
        .then(note => storageService.put(NOTES_KEY, note)
        )
}
function setTxt(noteId, txt) {
    return getNoteById(noteId)
        .then(note => {
            note.info.title = txt
            return note
        })
        .then(note => storageService.put(NOTES_KEY, note)
        )
}
function setTodos(noteId, title, todos) {
    return getNoteById(noteId)
        .then(note => {
            note.info.title = title
            note.info.todos = todos
            return note
        })
        .then(note => storageService.put(NOTES_KEY, note)
        )
}

function duplicateNote(noteId) {
    return getNoteById(noteId)
        .then(note => {
            let duplicatedNote = JSON.parse(JSON.stringify(note))
            duplicatedNote.id = null
            return note
        })
        .then(note => storageService.post(NOTES_KEY, note))
}
