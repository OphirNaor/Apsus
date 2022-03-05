import { noteService } from '../services/note-service.js';
import { eventBus } from '../../../services/eventBus-service.js'
import noteList from '../components/note-list.cmp.js';
import noteAdd from '../components/note-add.cmp.js';
import noteFilter from '../components/note-filter.cmp.js';




export default {
    template: `
    <section class="note-app app-main" >
        <note-add/>
            <note-filter @filtered="setFilter" />
        <note-list :notes="notesToShow" @remove="removeNote"/>
    </section>
    
    
    `,
    data() {
        return {
            notes: null,
            filterBy: null


        };
    },
    created() {
        this.loadNotes();
        eventBus.on('duplicateNote', this.duplicateNote);
        eventBus.on('removedNote', this.removeNote);
        eventBus.on('setBgc', this.setBgc);


    },
    methods: {
        setFilter(filterBy) {
            console.log('filterd');
            this.filterBy = filterBy;
        },
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
            // return this.notes;
            if (!this.filterBy) return this.notes;
            const regex = new RegExp(this.filterBy.title, 'i');
            if (this.filterBy.type) {
                return this.notes.filter(note => {
                    return regex.test(note.title) && note.type === this.filterBy.type
                });
            } else {
                return this.notes.filter(note => {
                    console.log(note);
                    return regex.test(note.title);
                });
            }
        },

    },


    components: {
        noteList,
        noteAdd,
        noteFilter



    }
}










