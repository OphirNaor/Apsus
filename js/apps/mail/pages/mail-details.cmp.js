import { mailService } from "../services/mail-service.js";

export default {
    template: `
    <section v-if="mail" class="mail-details">
    <p>{{mail.subject}}</p>
    </section>

`,
data(){
    return {
        mail: null,
        mailId: null,
    };
},

created(){
 

},
components: {
    mailService,
}
}
