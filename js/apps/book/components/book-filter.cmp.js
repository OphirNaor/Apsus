export default {
    template: `
        <section class="book-filter">
            <label>
            Search
            <input @input="filter" v-model="filterBy.title" type="text" placeholder="Title">
            <input @input="filter" v-model.number="filterBy.fromPrice" type="number" placeholder="From Price">
            <input @input="filter" v-model.number="filterBy.toPrice" type="number" placeholder="To Price">
            </label>
        </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                fromPrice: null,
                toPrice: null,
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', { ...this.filterBy });
        }
    }
};