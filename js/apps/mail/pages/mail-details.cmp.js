import { mailService } from "../services/mail-service.js";
import mailFilter from "../components/mail-filter.cmp.js";

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
    const { mailId } = this.$route.params;
    mailService.getById(mailId)
        .then(mail => this.mail = mail);
 
},
components: {
    mailService,
    mailFilter,
},
methods: {
    deleteMail(mailId){
        this.$emit('remove',mailId)
    }
},
}
