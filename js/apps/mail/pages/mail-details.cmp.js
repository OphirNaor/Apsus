import { mailService } from "../services/mail-service.js";
import { eventBus } from "../../../services/eventBus-service.js";

export default {
  template: `
 <section v-if="mail" class="mail-details main-layout main-height">
        <div class="backToMailList">

            <button class="back-btn" @click="backToMailList">Back</button>
        </div>
        <div class="main-details-container">
        <div class="mail-options">
                <svg @click="removeMail(mail.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                <svg @click="setMarkMail(mail.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path  :class="marked" fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            </div>
            <div class="open-mail">
                    <p>{{mail.subject}} </p>
                    <p>{{mail.sentAt}}</p>
            </div>
            <div> {{mail.from}} </div>
            <div class="mail-body">{{mail.body}}</div>

            <div>
                <button class="reply-btn">Reply</button>
            </div>
        </div>

    </section>
`,
  data() {
    return {
      mail: null,
      mailId: null,
    };
  },

  created() {
    const { mailId } = this.$route.params;
    mailService.getById(mailId).then((mail) => (this.mail = mail));
  },
  components: {

  },
  methods: {
    loadExpandMail() {
        const { mailId } = this.$route.params;
        mailService.getById(mailId)
            .then(mail => this.mail = mail);
    },
    backToMailList() {
        this.$router.push('/mail')
    },
    removeMail(mailId) {
        mailService.removeMail(mailId)
            .then((mail) => {
                const msg = {
                    txt: 'Moved to trash',
                    type: 'success'
                };
                eventBus.emit('showMsg', msg);
            })
    },
    setMarkMail(mailId) {
        mailService.setMarkMail(mailId)
            .then((mail) => {
                this.loadExpandMail()
                if (!mail.isMarked) return
                const msg = {
                    txt: 'Your mail was marked!',
                    type: 'success'
                };
                eventBus.emit('showMsg', msg);
            })
    },
    computed: {
        marked() {
            return { marked: this.mail.isMarked }
        }

    },

}}
