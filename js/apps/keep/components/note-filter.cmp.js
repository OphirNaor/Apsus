export default {
    template: `
        <section class="note-filter">
        <section class="notes-filter-container">
                <input ref="noteInput" 
                    @input="setFilter" 
                    type="text" 
                    v-model="filterBy.title" 
                    placeholder="Search by title"
                />
                <select v-model="filterBy.type">
                    <option disabled value="">Type:</option>
                    <option value="noteImg">Image</option>
                    <option value="noteTxt">Text</option>
                    <option value="noteVideo">Video</option>
                    <option value="noteTodo">List</option>
                </select>
        </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                type: ''
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', { ...this.filterBy });

        }
    }
}