import { mailService } from '../services/mail-service.js';
import { eventBus } from '../../../services/eventBus-service.js';

export default {
    props: ['mail'],
    components: {
        mailService,
        eventBus
    },
    template: `
        <div class="mail-preview"  @click="setDetails(mail.id)" @mouseover="hover = true"  @mouseleave="hover = false">
        <i class="far fa-star" :class="{checked:mail.isStar}" @click.stop="changeColor(mail)"></i>
           <p>{{mail.subject}}</p>
    
           <p>{{mail.sentAt}}</p>
           <div class="icons-preview">
           <i class="fas fa-trash"  :class={opacity:!hover} @click.stop="deleteEmail(mail.id)" ></i>
           <i :class="setIcon" @click.stop="toggleIcon(mail)"></i>
            </div>
        </div>
    `,
    data() {
        return {
            hover: false,
        }
    },
    created() {

    },
    watch: {

    },
    computed: {
        mailDescription() {
            var cut = this.mail.body.substring(0, 20)
            return cut + '...'
        },
        setIcon() {
            if (this.mail.isRead) return 'fas fa-envelope-open'
            return 'fas fa-envelope'
        },

    },
    methods: {
        toggleIcon(mail) {
            mail.isRead = !mail.isRead
            mailService.save(mail)
                .then(() => {
                    eventBus.$emit('refresh')
                })
        },
        changeColor(mail) {
            mail.isStar = !mail.isStar
            if (mail.isStar) {
                const msg = {
                    txt: 'Add To Your Starred',
                    type: 'success'
                };
                eventBus.$emit('showMsg', msg);
            } else {
                const msg = {
                    txt: 'Remove From Your Starred',
                    type: 'success'
                };
                eventBus.$emit('showMsg', msg);
            }
            mailService.save(mail)
                .then(() => {
                    eventBus.$emit('refresh')
                })
        },
        deleteEmail(mailId) {
            if (!this.mail.isTrash) {
                this.mail.isTrash = true
                mailService.save(this.mail)
                    .then(() => {
                        eventBus.$emit('refresh')
                    })
            } else {
                this.$emit('remove', mailId);
            }
        },
        setDetails(id) {
            this.mail.isRead = true
            mailService.save(this.mail)
                .then(() => {
                    eventBus.$emit('refresh')
                })
            console.log(this.mail.isRead);
            this.$router.push(`/mail/${id}`)
        }
    },

}