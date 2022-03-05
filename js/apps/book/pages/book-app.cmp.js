
import { bookService } from '../services/book-service.js';
import bookFilter from '../components/book-filter.cmp.js';
import bookList from '../components/book-list.cmp.js';
import bookDetails from './book-details.cmp.js';


export default {
    template: `
    <section class="book-app app-main">
        <book-filter @filtered="setFilter"></book-filter> 
        <book-list :books="booksToShow" @selected="selectBook" ></book-list >
        <book-details v-if="selectedBook" :book="selectedBook"  @close="closeDetails"></book-details>
    </section>
    
    
    `,
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: null,
            bookFromSearch: null
        };
    },
    created() {
        this.loadBooks();

    },
    methods: {
        getNewBook(searchTerm) {
            bookService.getGoogleBooks(searchTerm)
                .then((books) => (this.bookFromSearch = books))
        },
        selectBook(book) {
            console.log('book', book);
            this.selectedBook = book
        },
        closeDetails() {
            this.selectedBook = null
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        loadBooks() {
            bookService.query()
                .then(books => this.books = books);
        },

    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const regex = new RegExp(this.filterBy.title, 'i');
            const min = this.filterBy.fromPrice || 0;
            const max = this.filterBy.toPrice || Infinity;
            return this.books.filter(book => (regex.test(book.title) && (min < book.listPrice.amount) && (max > book.listPrice.amount)));
        },
    },


    components: {
        bookList,
        bookDetails,
        bookFilter,


    }
}
