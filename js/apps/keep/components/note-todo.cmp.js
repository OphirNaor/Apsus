export default {
    props: ['info'],
    template: `
    <section class="note-todo">
        <h1>{{info.title}}</h1>
        <ul>
            <li>
                {{info.todos}}

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