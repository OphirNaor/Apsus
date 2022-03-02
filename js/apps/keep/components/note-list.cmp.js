import { eventBus } from '../../../services/event-bus-service.js'



export default {
    props: ['notes'],
    template: `
    <section class="note-list">
                <div class="main-screen" :class="{'menu-open':selectedNote}" @click="toggleMenu"></div>
                <note-preview :note="(selectedNote && note.id === selectedNote.id) ? selectedNote: note" />
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
        toggleMenu() {
            eventBus.emit('unSelect', this.selectedNote.id)
            this.selectedNote = null
        },


    },
    computed: {


    },


    components: {
        eventBus,



    }
}