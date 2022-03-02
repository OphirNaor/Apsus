import { eventBus } from '../../../services/event-bus-service.js'
import notePreview from './note-preview.cmp.js';



export default {
    props: ['notes'],
    template: `
    <section class="note-list">
    <div class="note-list">
                <span v-for="note in notes" :key="note.id" class="note-preview-container" >
                    <note-preview :note="note" />
                </span>
            </div>
    </section>

    
    
    `,
    data() {
        return {
            selectedNote: null,

        };
    },
    created() {

    },
    methods: {
        // toggleMenu() {
        //     eventBus.emit('unSelect', this.selectedNote.id)
        //     this.selectedNote = null
        // },


    },
    computed: {


    },


    components: {
        eventBus,
        notePreview



    }
}