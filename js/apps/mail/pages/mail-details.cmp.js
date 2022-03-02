import { mailService } from "../services/mail-service.js";

export default {
    template: `
    <section v-if="mail" class="mail-details">
    <p>{{email.subject}}</p>
    </section>

`,

components: {
    mailService,
},}

