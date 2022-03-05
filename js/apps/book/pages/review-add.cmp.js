import { bookService } from "../services/book-service.js";
import { eventBus } from "../../../services/eventBus-service.js";


export default {
    // props: ['bookId'],
    template: `
          <section class="review-add app-main">
            <h3>Add a new review</h3>
              <form v-if="bookToEdit" @submit.prevent="save" class="review-form">
                  <input v-model="review.fullName" ref="name" type="text">
                  <div>
                  <label> Read at:</label>   <input type="date" v-model="review.readAt" class="date-input">
                  </div>
                  <div class="stars">
                    <span v-for="num in 5" class="fa fa-star" :class="{checked:num<=review.rate}" @click="changeColor(num)">
                    </span>
                </div>                  
                  <textarea v-model="review.content" placeholder="Type your review" rows="5" required
                  ></textarea>
                  <button>Save</button>   
              </form>
          </section>
        `,
    data() {
        return {
            bookToEdit: null,
            review: {
                fullName: 'Anonimus',
                rate: 3,
                readAt: new Date().toISOString().split('T')[0],
                content: null,
            },
        };
    },

    created() {
        setTimeout(() => {
            this.$refs.name.focus();
            this.$refs.name.select();
        }, 0);
        const bookId = this.$route.params.bookId;
        bookService.getById(bookId).then((book) => (this.bookToEdit = book));
    },

    methods: {
        save() {
            bookService.addReview(this.review, this.bookToEdit.id)
                .then(() => {
                    const msg = {
                        txt: 'Review added successfully',
                        type: 'success',
                    };
                    this.$router.push('/book/' + this.bookToEdit.id);
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
        changeColor(num) {
            this.review.rate = num;
        },

    }
}
