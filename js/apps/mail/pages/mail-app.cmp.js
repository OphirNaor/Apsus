import mailList from "../components/mail-list.cmp.js";
import { mailService } from "../services/mail-service.js";
import { eventBus } from "../../../services/eventBus-service.js";
import mailFilter from "../components/mail-filter.cmp.js";
import mailSidebar from "../components/mail-sidebar.cmp.js";
import mailCompose from "../components/mail-compose.cmp.js";
import newMail from "../components/new-mail.cmp.js";

export default {
  template: `
     <section class="mail-app main-layout main-height">
        <div class="filters-container">
            <mail-compose @new="open"></mail-compose>
            <div class="filters">
                <mail-filter  @filtered="setFilter" />
            </div>
        </div>
        <div class="mail-app-container">
            <mail-sidebar :counter="counterMail"  @sidebar="search" ></mail-sidebar>
            <new-mail v-if="isNewMail" @deletDraft="open" @addNewMail="addMail"></new-mail>
            <mail-list @markedMail="setMarkMail" @totrashMail="removeMail" @read="updateMail" v-if="!isNewMail" :mails="mailsToShow"/>
        </div>
    </section>
    `,
  data() {
    return {
      mails: null,
      filterBy: null,
      isNewMail: false,
      sidebar: null,
      taggedMails: null,
      counterMail: 0,
    };
  },
  created() {
    this.loadMails();
    eventBus.on("deletedMail", this.loadMails());
  },
  methods: {
    sidebarClear() {
      var sidebarEls = document.getElementsByClassName("mail-side-bar-btn");
      for (let i = 0; i < 5; i++) {
        sidebarEls[i].classList.remove("mail-side-bar-focus");
      }
    },
    loadMails() {
      mailService.query().then((mails) => {
        this.mails = mails;
        var inboxMails = this.mails.filter((mail) => {
          return !mail.isRemoved;
        });
        this.taggedMails = inboxMails;
        var countUnreadMails = this.taggedMails.filter((mail) => {
          return !mail.isRead;
        });
        this.counterMail = countUnreadMails.length;
        if (!countUnreadMails.length) this.counterMail = " ";
      });
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    open() {
      this.isNewMail = !this.isNewMail;
    },
    addMail(newMail) {
      this.isNewMail = !this.isNewMail;
      mailService.addNewMail(newMail).then(() => {
        this.loadMails();
        const msg = {
          txt: "Mail was sent !",
          type: "success",
        };
        eventBus.emit("showMsg", msg);
      });
    },
    removeMail(mailId) {
      mailService.removeMail(mailId).then((mail) => {
        this.loadMails();
        const msg = {
          txt: "Moved to Trash !",
          type: "Success",
        };
        eventBus.emit("showMsg", msg);
      });
    },
    setMarkMail(mailId) {
      mailService.setMarkMail(mailId).then((mail) => {
        this.loadMails();
        if (!mail.isMarked) return;
        const msg = {
          txt: "Mail marked",
          type: "success",
        };
        eventBus.emit("showMsg", msg);
      });
    },
    updateMail(mailId) {
      mailService.updateMail(mailId).then(() => {
        this.loadMails();
      });
    },
    search(filter) {
      if (this.isNewMail) this.isNewMail = !this.isNewMail;
      this.sidebar = filter;

      if (this.sidebar === "inbox") {
        this.taggedMails = this.mails.filter((mail) => {
          this.sidebarClear();
          var sidebarInbox = document.getElementById("side-bar-inbox");
          sidebarInbox.classList.add("mail-side-bar-focus");
          return !mail.isRemoved;
        });
      } else if (this.sidebar === "marked") {
        this.taggedMails = this.mails.filter((mail) => {
          this.sidebarClear();
          var sidebarMarked = document.getElementById("side-bar-marked");
          sidebarMarked.classList.add("mail-side-bar-focus");
          return mail.isMarked;
        });
      } else if (this.sidebar === "sent") {
        this.taggedMails = this.mails.filter((mail) => {
          this.sidebarClear();
          var sidebarSent = document.getElementById("side-bar-sent");
          sidebarSent.classList.add("mail-side-bar-focus");
          return mail.isSent;
        });
      } else if (this.sidebar === "drafts") {
        this.taggedMails = this.mails.filter((mail) => {
          this.sidebarClear();
          var sidebarDrafts = document.getElementById("side-bar-drafts");
          sidebarDrafts.classList.add("mail-side-bar-focus");
          return mail.isRemoved;
        });
      } else if (this.sidebar === "trash") {
        this.taggedMails = this.mails.filter((mail) => {
          this.sidebarClear();
          var sidebarTrash = document.getElementById("side-bar-trash");
          sidebarTrash.classList.add("mail-side-bar-focus");
          return mail.isRemoved;
        });
      }
    },
  },
  computed: {
    mailsToShow() {
      var sidebar = this.sidebar;

      if (!this.filterBy) return this.taggedMails;

      const searchStr = this.filterBy.subject.toLowerCase();
      var read = this.filterBy.isRead;

      const filterMail = this.taggedMails.filter((mail) => {
        return mail.subject.toLowerCase().includes(searchStr);
      });

      if (!read) read = "all";
      const filterByRead = filterMail.filter((mail) => {
        if (read === "all") return mail;
        return mail.isRead.toString() === read;
      });

      return filterByRead;
    },
  },
  components: {
    mailList,
    mailFilter,
    mailSidebar,
    newMail,
    mailCompose,
  },
};
