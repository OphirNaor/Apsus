export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <img :src="book.thumbnail" alt="book-img" class="book-preview-img">
            <p> {{book.title}}</p>
            <p>{{priceToShow}}</p>
        </section>
    `,
    data() {
        return {}
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

        }
    }
}