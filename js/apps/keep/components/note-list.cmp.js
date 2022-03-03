// import { eventBus } from '../../../services/eventBus-service.js'
import notePreview from './note-preview.cmp.js'
// import noteImg from './note-img.cmp.js';
// import noteTxt from './note-txt.cmp.js';



export default {
    props: ['notes'],
    template: `
    <section class="note-list">
    <div class="note-list">
                <div v-for="note in notes" :key="note.id" class="note-preview-container" >                
                    <note-preview :note="note" />
                </div>
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
        notePreview




    }
}