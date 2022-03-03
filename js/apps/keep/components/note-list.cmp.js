import notePreview from './note-preview.cmp.js'




export default {
    props: ['notes'],
    template: `
    <section class="note-list">
    <div class="note-list">
                <div v-for="note in notes" :key="note.id" class="note-preview-container" >                
                    <note-preview :note="note" @click="remove(note.id)"/>
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
        remove(noteId) {
            console.log('noteId', noteId);
            this.$emit('remove', noteId)
        },



    },
    computed: {


    },


    components: {
        notePreview




    }
}