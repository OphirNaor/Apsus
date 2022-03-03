import { eventBus } from "../../../services/eventBus-service";


export const noteTxt = {
    props: ['note'],
    template: `
    <section class="note-txt" @click = "selected = true">
            <pre class="txt-editor" 
            :class="note.id" id="note-txt" 
            contenteditable="true" @click.stop="" 
            @focusout="setTxt(note.id)">{{note.info.title}}</pre>

    </section>
    
    
    `,
    data() {
        return {
            selected: false,

        };
    },
    created() {

    },
    methods: {
        setTxt(noteId) {
            if (!document.querySelector(`.txt-editor.${noteId}`)) return
            const txt = document.querySelector(`.txt-editor.${noteId}`).innerText
            eventBus.emit('setTxt', noteId, txt)
        },


    },
    computed: {


    },


    components: {


    }
}