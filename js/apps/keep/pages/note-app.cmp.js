import { noteService } from '../services/note-service.js';
import { eventBus } from '../../../services/eventBus-service.js'
import noteList from '../components/note-list.cmp.js';
import noteAdd from '../components/note-add.cmp.js';



export default {
    template: `
    <section class="note-app app-main" >
        <note-add/>
            <!-- <note-filter @filtered="setFilter" /> -->
        <note-list :notes="notesToShow" @remove="removeNote"/>
    </section>
    
    
    `,
    data() {
        return {
            notes: null


        };
    },
    created() {
        this.loadNotes();
        eventBus.on('duplicateNote', this.duplicateNote);
        eventBus.on('removedNote', this.removeNote);
        eventBus.on('setBgc', this.setBgc);


    },
    methods: {
        loadNotes() {
            noteService.query()
                .then(notes => this.notes = notes);
        },
        removeNote(id) {
            console.log('delete');
            noteService.remove(id)
            const idx = this.notes.findIndex(note => note.id === id)
            this.notes.splice(idx, 1);
        },
        duplicateNote(id) {
            noteService.duplicateNote(id)
                .then(this.loadNotes)
        },
        setBgc(id, color) {
            noteService.setBgc(id, color)
                .then(this.loadNotes)
        },


    },
    computed: {
        notesToShow() {
            return this.notes;

        }


    },


    components: {
        noteList,
        noteAdd,



    }
}









