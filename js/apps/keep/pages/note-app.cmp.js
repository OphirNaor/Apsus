import { noteService } from '../services/note-service.js';
import { eventBus } from '../../../services/eventBus-service.js'




export default {
    template: `
    <section class="keep-app app-main" >
        <note-add/>
            <note-filter @filtered="setFilter" />

    </section>
    
    
    `,
    data() {
        return {

        };
    },
    created() {

    },
    methods: {


    },
    computed: {


    },


    components: {


    }
}








