export default {
    template: `
        <div class="mail-filter">
            

<div class="wrap">
   <div class="search">
        <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
        </button>
        <input @input="filter" v-model="filterBy.subject" type="text" class="searchTerm" placeholder="Search for mails">
   </div>
</div>

            <select @change="filter" v-model="filterBy.isRead" v-model="selected">
                <option selected value="all" >All</option>
                <option value="true" >Read</option>
                <option value="false" >Unread</option>
            </select>
        </div>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
                isRead: '',
                selected: 'all'
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', {...this.filterBy });

        }
    }
}
