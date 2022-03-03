import { noteService } from '../services/note-service.js';
// import { eventBus } from '../../../services/eventBus-service.js'
import noteList from '../components/note-list.cmp.js';
import noteAdd from '../components/note-add.cmp.js';



export default {
    template: `
    <section class="note-app app-main" >
        <note-add/>
            <!-- <note-filter @filtered="setFilter" /> -->
        <note-list :notes="notesToShow"> </note-list>
    </section>
    
    
    `,
    data() {
        return {
            notes: null


        };
    },
    created() {
        noteService.query()
            .then(notes => this.notes = notes);

    },
    methods: {
        // removeNote(id) {
        //     noteService.remove(id)
        //         .then(() => {
        //             const idx = this.notes.findIndex(note => note.id === id);
        //             this.notes.splice(idx, 1);
        //         });


    },
    computed: {
        notesToShow() {
            return this.notes;

        }


    },


    components: {
        noteList,
        noteAdd


    }
}








