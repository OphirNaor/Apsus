import mailList from "../components/mail-list.cmp.js";
import { mailService } from "../services/mail-service.js";
import mailFilter from "../components/mail-filter.cmp.js";

export default {
  template: `
    <section class="mail-app app-main">
        <h1>Email:</h1>
       <mail-filter @filtered="setFilter"></mail-filter>
     <mail-list :mails="mailsToShow" @remove="deleteMail"> </mail-list> 
    </section>
    `,

  components: {
    mailList,
    mailService,
    mailFilter,
  },

  created() {
    mailService.query().then((mails) => (this.mails = mails));
  },
  data() {
    return {
      mails: null,
      selectedMail:null,
      filterBy: null,
      counter:0,
    };
  },
  methods: {
    loadMails() {
      mailService.query().then((mails) => {
        this.mails = mails;
      });
    },
    selectMail(mail) {
      this.selectedMail = mail;
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    //   console.log(this.filterBy)
    },
    deleteMail() {
        mailService.remove(mailId)
        .then(() => {
            this.mails = this.mails.filter(mail => mail.id !== mailId)
            this.loadMails();
        })
  },

  computed: {
    mailsToShow() {
     if (!this.filterBy) return this.mails;
     if (this.filterBy === 'starred') {
         return this.mails.filter(mail => mail.isStar)
     }
     if (this.filterBy === 'sent') {
        return this.mails.filter(mail => mail.isSent)

    }
  }
  }}}