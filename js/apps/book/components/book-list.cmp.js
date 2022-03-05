import bookPreview from './book-preview.cmp.js'


export default {
    props: ['books'],
    template: `
        <section class="book-list">          
                <li v-for="book in books" :key="book.id" class="book-preview-container">
                   <book-preview :book="book"/>
                   <div class="actions">
                       <button @click="remove(book.id)">X</button>
                       <router-link class="details-btn" :to="'/book/'+book.id">Details</router-link>
                       <!-- <button @click="select(book)">Details</button> -->
                   </div>  
                </li>   
        </section>
    `,
    components: {
        bookPreview
    },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
        select(book) {
            this.$emit('selected', book);
        }
    },
}
