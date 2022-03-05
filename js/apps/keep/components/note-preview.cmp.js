// import { eventBus } from '../../../services/eventBus-service.js'
import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodo from './note-todos.cmp.js';
import noteVideo from './note-video.cmp.js';




export default {
    props: ['note'],
    template: `
    <section class="note-priview">
    <component id="component" :is="note.type" :info="note.info" />       
     
    </section>
    
    
    `,

    data() {
        return {



        };
    },
    created() {

    },
    methods: {
        // pin(noteId) {
        //     eventBus.emit('pinnedNote', noteId)
        // },
        // remove(noteId) {
        //     console.log('noteId', noteId);
        //     this.$emit('remove', noteId)
        // },
        // setBgc(noteId, color) {
        //     eventBus.emit('setBgc', noteId, color)
        // },
        // duplicate(noteId) {
        //     console.log('duplicated', noteId);
        //     eventBus.emit('duplicateNote', noteId)
        // },



    },
    computed: {


    },


    components: {
        noteTxt,
        noteImg,
        noteTodo,
        noteVideo


    }
}