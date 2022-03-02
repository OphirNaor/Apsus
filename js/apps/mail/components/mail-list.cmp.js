import { mailService } from "../services/mail-service.js";
import  mailPreview from "../components/mail-preview.cmp.js";

export default {
  props: ["mails"],
  template: `
    <section class='mail-list main-app'>
        <ul>
        <mail-preview :mail="mail"/>
            <li v-for="mail in mails" :key="mail.id">
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
};
