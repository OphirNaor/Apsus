import { utilService } from "./js/services/util-service.js";
import { storageService } from "./js/services/async-storage-service.js";

const MAILS_KEY = "mails";

const gMails = [
  {
    id: "e101",
    subject: "Miss you!",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    isRead: false,
    sentAt: 1551133930594,
    to: "momo@momo.com",
  },
  {
    id: "e102",
    subject: "Miss you!",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    isRead: false,
    sentAt: 1551133930594,
    to: "momo@momo.com",
  },

  {
    id: "e103",
    subject: "Miss you!",
    body: "Donec vel est odio. Sed malesuada metus dolor, sit amet bibendum mauris hendrerit sit amet. Mauris quis est vel sem ornare aliquam. Nam at est a velit dignissim ultrices suscipit id velit. Mauris tincidunt, mauris eget porta semper, lacus metus cursus lectus, sit amet elementum purus mauris sed risus. Donec mollis, dui fringilla cursus condimentum, tortor erat lobortis ipsum, ut rutrum elit metus ut quam. Praesent convallis pretium semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque consectetur justo quis arcu fermentum, sed interdum massa placerat. Donec nec nulla et ligula luctus auctor. Vestibulum vestibulum id ex ac euismod. Donec vulputate ultrices purus, nec laoreet arcu. In euismod sed magna sit amet fringilla. Proin placerat fringilla lorem, eu luctus mauris venenatis in. Vestibulum fermentum quis nisl vel accumsan.",
    isRead: false,
    sentAt: 1551133930594,
    to: "momo@momo.com",
  },

  {
    id: "e104",
    subject: "Miss you!",
    body: "Vestibulum vestibulum porta enim sed rutrum. Pellentesque efficitur, arcu sed eleifend ultricies, ante nisi tempus erat, quis laoreet leo purus a orci. Maecenas dapibus maximus enim at porta. Curabitur et sem porta, tempus leo nec, gravida orci. Aenean rutrum auctor ornare. Duis convallis augue dolor, eu tincidunt erat venenatis sit amet. Maecenas mattis non ante quis placerat. Maecenas eget tempus velit, non commodo leo. Duis ac massa ornare, euismod ex ac, fringilla risus. Etiam porttitor suscipit mauris porta varius. Aliquam vitae lorem quis odio semper congue. Quisque rutrum semper dolor sed tristique. Fusce porttitor nunc in dui rhoncus imperdiet. Praesent auctor libero vitae hendrerit interdum. Nullam quis nibh dapibus nibh porttitor lobortis.",
    isRead: false,
    sentAt: 1551133930594,
    to: "momo@momo.com",
  },

  {
    id: "e105",
    subject: "Miss you!",
    body: "Would love to catch up sometimes",
    isRead: false,
    sentAt: 1551133930594,
    to: "momo@momo.com",
  },
];

_createMails();

export const mailService = {
  query,
  save,
  remove,
  getById,
  getEmptyMail,
};

function query() {
  return storageService.query(MAILS_KEY);
}

function save(mail) {
  if (mail.id) return storageService.put(EMAILS_KEY, mail);
  else return storageService.post(EMAILS_KEY, mail);
}

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId);
}

function getById(mailId) {
  return storageService.get(MAILS_KEY, mailId);
}

function getEmptyMail() {
  return {
    id: "",
    subject: "",
    body: "",
    isRead: false,
    sentAt: 1551133930594,
    to: "",
  };
}

function _createMails() {
  let mails = utilService.loadFromStorage(MAILS_KEY);
  if (!mails || !mails.length) {
    mails = booksList.getInitialBooks();
    utilService.saveToStorage(MAILS_KEY, mails);
  }
  return mails;
}
