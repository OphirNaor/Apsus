
 export default {
    props: ['mail'],
    template: `
    <section class='mail-preview main-app'>
       
    <div>subject: {{mail.subject}}</div>        
        <div>body: {{mail.body}}</div>     
        <div>to: {{mail.to}}</div>     
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