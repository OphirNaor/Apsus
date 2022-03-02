
 export default {
    props: ['mail'],
    template: `
    <section class='mail-preview main-app'>
       
    <p>subject: {{mail.subject}}</p>        
        <p>body: {{mail.body}}</p>     
        <p>to: {{mail.to}}</p>     
        <hr>
         
    </section>
    `,
    data() {
        return {

        };
    },
    methods: {


    },
    computed: {

    },
    created() {

    },
    components: {

    }

};