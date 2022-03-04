import notePreview from './note-preview.cmp.js'
import { eventBus } from '../../../services/eventBus-service.js';

// :class="{'show-colors':showColors}"  @click="showColors=!showColors"
/* <ul class = "color-palette">
                        <li v-for="color in colors" @click ="setBgc(note.id,color),showColors=!showColors" :style = "{'background-color':color}"></li>
                    // </ul></a> */


export default {
    props: ['notes'],
    template: `
    <section>
        <div class="note-list">
            <div v-for="note in notes" :key="note.id" class="note-preview-container" >                
                <note-preview :note="note"/>
                <div class="actions-container flex space-between">
                    <a class="fa-solid fa-thumbtack pin-note" @click="pin(note.id)"title="Pin note"></a>
                    <a class="fa fa-trash" @click.stop="remove(note.id)"title="Delete note"></a>
                    <a class="fa fa-clone duplicate-note" @click="duplicate(note.id)"title="Duplicate note"></a>
                    <a class="fa fa-envelope" @click="sendByMail"></a>
                    <a class = "fa-solid fa-palette color-palette-container dropdown" title="Pick color">
                    <div class="dropdown-content">
					<template v-for="color in Colors">
						<span :style="{'background-color':color.value}"
							:class="setBgc(color.value)"
							@click="styleNote(color.value)"> &nbsp;
                        </span>
					</template>
				    </div>                  
                 </div>
             </div>
        </div>
    </section>
	
    
    
    `,
    data() {
        return {
            selectedNote: null,
            // bgc: this.note.style.bgc,
            colors: ['#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed', '#ffffff'],
            showColors: false,
            selected: false

        };
    },
    created() {

    },
    methods: {
        remove(noteId) {
            console.log('noteId', noteId);
            this.$emit('remove', noteId)
        },
        duplicate(noteId) {
            console.log('duplicated', noteId);
            eventBus.emit('duplicateNote', noteId)
        },
        setBgc(color) {
            return (this.note.styles.bgc === color) ? 'selected' : '';
        },
        styleNote(newBgColor) {
            eventBus.emit('setBgc', this.note.id, newBgColor);
        },



    },
    computed: {


    },


    components: {
        notePreview




    }
}