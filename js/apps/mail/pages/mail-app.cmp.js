import mailList from "../components/mail-list.cmp.js"
import { mailService } from "../services/mail-service.js"

export default {
    template: `
    <section class="mail-app app-main">
        <h1>Email:</h1>
       
     <mail-list :mails="mailsToShow"> </mail-list> 
    </section>
    `,

    components: {
        mailList,
    },

    created() {
        mailService.query()
            .then(mails => this.mails = mails);
    },
    data() {
        return {
            mails: null,


        }
    },
    methods: {
        loadMails(){
            mailService.query()
            .then(mails => {
                this.mails = mails
            });
        }
    },
    computed: {
        mailsToShow() {
            return this.mails;

        }
    }
};
