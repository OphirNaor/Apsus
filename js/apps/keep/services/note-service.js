import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const NOTES_KEY = 'notes';
_createNotes()


export const noteService = {
    query,
    save


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
                isPinned: false,
                info: {
                    title: `Fullstack Me Baby!`
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
                    title: "Bobi and Me",
                    url: "http://some-img/me",
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
