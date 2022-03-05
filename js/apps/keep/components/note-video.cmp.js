export default {
    props: ['info'],
    template: `
    <section class= "note-video">
           <iframe width="180px" :src="modifedSrc" frameborder="0"></iframe>
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
        modifedSrc() {
            if (this.info.url.includes('watch?v=')) return this.info.url.replace('watch?v=', 'embed/')
            else return this.info.url

        }



    },


    components: {


    }
}