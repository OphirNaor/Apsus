import { mailService } from "../services/mail-service.js";
import  mailPreview from "../components/mail-preview.cmp.js";

export default {
  props: ["mails"],
  template: `
    <section class='mail-list main-app'>
        <ul>
            <li v-for="mail in mails" :key="mail.id">
            <mail-preview :mail="mail" @remove="deleteMail"/>
            </li>
        </ul>
    </section>
    `,
      data() {
        return {}
    },
  components: {
    mailService,
    mailPreview,
  },

methods:{
    deleteMail(mailId){
        this.$emit('remove',mailId);
    },
}
}
