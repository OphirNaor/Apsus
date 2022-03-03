import { eventBus } from '../../../services/eventBus-service.js'




export default {
    props: ['note'],
    template: `
    <section class="note-priview">
        <h4>{{note.info.title}}</h4>
        <section class="pin-container"><a class="fa-solid fa-thumbtack pin-note" @click.stop="pin(note.id)"title="Pin note">
        </a></section>
        <div class="actions-container">
        <a class="fa fa-trash" @click.stop="remove(note.id)"title="Delete note"></a>
        <a class="fa fa-clone duplicate-note" @click.stop="duplicate(note.id)"title="Duplicate note"></a>
        <a class="fa fa-envelope" @click.stop="sendByMail"></a>
        <a class="" @click="">&#10530</a>
        <a class = "fa-solid fa-palette color-palette-container" :class="{'show-colors':showColors}"  @click.stop="showColors=!showColors" title="Pick color" >
            <ul class = "color-palette">
                <li v-for="color in colors" @click.stop ="setBgc(note.id,color),showColors=!showColors" :style = "{'background-color':color}"></li>
            </ul>
        </a>
    </div>
    </section>
    
    
    `,
    template: `
    <section class="note-priview">
        <h4>{{note.info.title}}</h4>
        <div class="actions-container">
            <section class="pin-container"><a class="fa-solid fa-thumbtack pin-note" @click.stop="pin(note.id)"title="Pin note">
                </a></section>
            <a class="fa fa-trash" @click.stop="remove(note.id)"title="Delete note"></a>
            <a class="fa fa-clone duplicate-note" @click.stop="duplicate(note.id)"title="Duplicate note"></a>
            <a class="fa fa-envelope" @click.stop="sendByMail"></a>
            <a class="" @click="">&#10530</a>
            <a class = "fa-solid fa-palette color-palette-container" :class="{'show-colors':showColors}"  @click.stop="showColors=!showColors" title="Pick color" >
                <ul class = "color-palette">
                    <li v-for="color in colors" @click.stop ="setBgc(note.id,color),showColors=!showColors" :style = "{'background-color':color}"></li>
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
            eventBus.emit('removedNote', noteId)
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


    }
}