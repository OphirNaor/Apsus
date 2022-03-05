import { bookService } from '../services/book-service.js';
import { eventBus } from '../../../services/eventBus-service.js';
import longTxt from '../components/long-txt.cmp.js';
export default {
    // props: ['book'],
    template: `
        <section v-if="book" class="book-details app-main">
        <h4>Book Details</h4>
            <ul>
                <li>
                  <span>Author:</span>
                    {{ (book.authors).join(' , ') }}
                </li>
                <li>
                  <span>Subtitle:</span>
                  {{ book.subtitle }}
                </li>
                <li>
                  <span>Published at:</span>
                   {{ publishedToShow }}
                </li>
                <li>
                  <span>Description:</span> 
                  <long-text :txt="book.description"/>
                </li>
                <li>
                  <span>PageCount:</span>
                   {{ pagesToShow }} 
                </li>
                <li>
                  <span>Categories:</span>
                  {{ (book.categories).join(' , ') }}
                </li>
                <li>
                  <span>Language:</span> {{ book.language }}
                </li>
                <li>
                  <span>Price:</span >
                  <span :class="priceStyle"> 
                    {{ priceToShow }} 
                  </span>
                </li>
                <li>
                   <img :src="book.thumbnail" alt="book-image">
                </li>
            </ul>
            <p v-if="!book.reviews || !book.reviews.length">No reviews</p>
          <div v-else class="reviews">
            <h1>reviews:</h1>
            <div class="reviews-container">
              <ul v-for="(review, idx) in book.reviews" class="review-container">
                <li> <span>Review from:</span> {{review.fullName}}</li>
                <li><span>Rating:</span> 
                <span v-for="num in review.rate" class="fa fa-star checked">
                </span> </li>
                <li><span> Read at:</span> {{review.readAt}} </li>
                <li><div>Review:</div> {{review.content}} </li>
                <button @click=remove(idx)>Delete</button>
              </ul>
            </div>
        </div>
        <router-link :to="'/book/'+ this.book.id +'/review-add'">Add review</router-link>  |
            <router-link to="/book">Back</router-link>
        </section>
    `,
    data() {
        return {
            book: null,
        };
    },
    created() {
        const bookId = this.$route.params.bookId;
        bookService.getById(bookId)
            .then(book => this.book = book);
    },
    components: {
        longTxt,
    },
    methods: {
        remove(idx) {
            this.book.reviews.splice(idx, 1);
            bookService
                .save(this.book)
                .then(() => {
                    const msg = {
                        txt: 'Review deleted successfully',
                        type: 'success',
                    };
                    eventBus.emit('showMsg', msg);
                })
                .catch((err) => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error',
                    };
                    eventBus.emit('showMsg', msg);
                });
        },
    },

    computed: {
        priceToShow() {
            let icon;
            switch (this.book.listPrice.currencyCode) {
                case 'ILS':
                    icon = '₪';
                    break;
                case 'EUR':
                    icon = '€';
                    break;
                case 'USD':
                    icon = '$';
                    break;

            }
            return this.book.listPrice.amount + ' ' + icon;

        },
        pagesToShow() {
            let pages = this.book.pageCount;
            if (pages > 500) return pages + ' Long reading';
            if (pages > 200) return pages + ' Decent reading';
            if (pages < 100) return pages + ' Light reading';
            else return pages;
        },
        publishedToShow() {
            let year = +this.book.publishedDate;
            if (year < new Date().getFullYear() - 10) return year + 'Veteran Book';
            if (year > new Date().getFullYear() - 1) return year + ' New!';
            else return year;
        },
        priceStyle() {
            return {
                red: this.book.listPrice.amount > 150,
                green: this.book.listPrice.amount < 20,
            };
        },
    },


}