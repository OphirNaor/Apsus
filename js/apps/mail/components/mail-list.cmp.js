import mailPreview from "../components/mail-preview.cmp.js";

export default {
  props: ["mails"],
  template: `
        <section class="mail-list">

                <div v-for="mail in mails" :key="mail.id" class="mail-list-container">
                    <mail-preview @read="mailRead" @markedMail="markedMail" @totrashMail="totrashMail" :mail="mail" />    
                </div>

        </section>
    `,
  methods: {
    totrashMail(mailId) {
      this.$emit("totrashMail", mailId);
    },
    markedMail(mailId) {
      this.$emit("markedMail", mailId);
    },
    mailRead(mailId) {
      this.$emit("read", mailId);
    },
  },
  components: {
    mailPreview,
  },
};
