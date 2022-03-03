import mailPreview from "../components/mail-preview.cmp.js";

export default {
  props: ["mails"],
  template: `
        <section class="mail-list">

                <div v-for="mail in mails" :key="mail.id" class="mail-list-container">
                    <mail-preview @read="mailRead" @staredMail="staredMail" @removeMail="deleteMail" :mail="mail" />    
                </div>

        </section>
    `,
  methods: {
    deleteMail(mailId) {
      this.$emit("removeMail", mailId);
    },
    staredMail(mailId) {
      this.$emit("staredMail", mailId);
    },
    mailRead(mailId) {
      this.$emit("read", mailId);
    },
  },
  components: {
    mailPreview,
  },
};
