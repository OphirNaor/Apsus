export default {
    props: ['info'],
    template: `
    <section class="note-todo">
        <h1>{{info.title}}</h1>
        <ul>
            <li v-for="todo in info.todos" :class="{ 'complete': todo.done }">
                {{todo.txt}}

            </li>
        </ul>

    </section>
    
    
    `,
    data() {
        return {

        };
    },
    created() {

    },
    methods: {


    },
    computed: {


    },


    components: {


    }
}