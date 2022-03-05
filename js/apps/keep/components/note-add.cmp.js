import { noteService } from "../services/note-service.js";
import { eventBus } from "../../../services/eventBus-service.js";


export default {
    template: `
    <section class="note-add-container">
    <form class="note-add flex space-between">
                <input class="add-start" type="text" :placeholder="placeholder" v-model="noteTitle" autofocus>
                <div class="actions-add flex space-between">
                    <a class="btn-save fa fa-save" :class ="{saved:active}" @click.prevent="save" title="Save"></a>
                    <a class="btn-txt fa fa-font" :class ="{active:newNote.type === 'note-txt'}" @click.prevent="setType('note-txt')" title="Text"></a>
                    <a class="btn-todos fa fa-list" :class ="{active:newNote.type === 'note-todos'}" @click.prevent="setType('note-todos')" title="Todos"></a>
                    <a class="btn-img fa fa-image":class ="{active:newNote.type === 'note-img'}" @click.prevent="setType('note-img')" title="Image"></a>
                    <a class="btn-video fa fa-youtube" :class ="{active:newNote.type === 'note-video'}" @click.prevent="setType('note-video')" title="Video"></a>
                </div>
    </form>

    </section>
    
    
    `,
    data() {
        return {
            placeholder: "What's on your mind...",
            newNote: {
                type: 'note-txt',
                info: {
                    title: null
                },

            },
            active: null,
            noteTitle: null

        };
    },
    created() {

    },
    methods: {
        setType(type) {
            switch (type) {
                case 'note-txt':
                    this.placeholder = "What's on your mind..."
                    break
                case 'note-todos':
                    this.placeholder = "Enter comma separated list..."
                    break
                case 'note-img':
                    this.placeholder = "Enter image URL..."
                    break
                case 'note-video':
                    this.placeholder = "Enter video URL..."
                    break
            }
            this.newNote.type = type


        },
        save() {
            console.log(this.noteTitle);
            if (!this.noteTitle) return
            this.newNote.info.title = this.noteTitle;
            console.log('save was called');
            noteService.addNewNote(this.newNote)
                .then((newNote) => {
                    console.log(this.$parent.notes);
                    this.$parent.notes.push(newNote)

                    this.newNote.info.title = ''
                    this.active = true
                    setTimeout(() => {
                        this.active = false
                    }, 1500);
                })
        }
    }
}
