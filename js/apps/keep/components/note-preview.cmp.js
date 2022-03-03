// import { eventBus } from '../../../services/eventBus-service.js'
import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTODO from './note-todo.cmp.js';




export default {
    props: ['note'],
    template: `
    <section class="note-priview">
    <component id="component" :is="note.type" :info="note.info" />       
        <div class="actions-container flex space-between">
            <!-- <button @click="remove(note.id)">X</button> -->
        <a class="fa-solid fa-thumbtack pin-note" @click="pin(note.id)"title="Pin note"></a>
        <a class="fa fa-trash" @click="remove(note.id)"title="Delete note"></a>
        <a class="fa fa-clone duplicate-note" @click="duplicate(note.id)"title="Duplicate note"></a>
        <a class="fa fa-envelope" @click="sendByMail"></a>
        <a class = "fa-solid fa-palette color-palette-container" :class="{'show-colors':showColors}"  @click="showColors=!showColors" title="Pick color" >
            <ul class = "color-palette">
                <li v-for="color in colors" @click ="setBgc(note.id,color),showColors=!showColors" :style = "{'background-color':color}"></li>
            </ul>
            
        </a>
    </div>
    </section>
    
    
    `,

    data() {
        return {
            bgc: this.note.style.bgc,
            colors: ['#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed', '#ffffff'],
            showColors: false,
            selected: false


        };
    },
    created() {

    },
    methods: {
        pin(noteId) {
            eventBus.emit('pinnedNote', noteId)
        },
        remove(noteId) {
            console.log('noteId', noteId);
            this.$emit('remove', noteId)
        },
        setBgc(noteId, color) {
            eventBus.emit('setBgc', noteId, color)
        },
        duplicate(noteId) {
            eventBus.emit('duplicateNote', noteId)
        },



    },
    computed: {


    },


    components: {
        noteTxt,
        noteImg,
        noteTODO


    }
}