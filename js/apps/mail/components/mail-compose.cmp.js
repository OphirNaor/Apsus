export default {
    template: `
        <section class="mail-compose">
                <div @click="openNewMail" class="compose-mail-btn">               
                    <button>Compose</button>
                </div>
    </section>
    `,
    methods: {
        openNewMail() {
            this.$emit('new')
        },


    }
}