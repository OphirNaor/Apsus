import { eventBus } from "../../../services/eventBus-service";


export const noteImg = {
    props: ['note'],
    template: `
    <section class="note-img" @click = "selected = true">
    <pre class="img-editor" :class="note.id" contenteditable="true" @click.stop="">{{note.info.title}}</pre>
            <img :src="urlToShow" >
    </section>
    
    
    `,
    data() {
        return {
            selected: false,
            urlToEdit: null

        };
    },
    created() {
        this.urlToShow = this.note.info.url

    },
    methods: {


    },
    computed: {


    },


    components: {
        eventBus


    }
}