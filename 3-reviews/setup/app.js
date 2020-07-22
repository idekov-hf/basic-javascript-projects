// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const app = {
  img: document.getElementById('person-img'),
  author: document.getElementById('author'),
  job: document.getElementById('job'),
  info: document.getElementById('info'),
  prevBtn: document.querySelector('.prev-btn'),
  nextBtn: document.querySelector('.next-btn'),
  randomBtn: document.querySelector('.random-btn'),

  _currentReview: 0,
  set reviewIndex(val) {
    this._currentReview = val % reviews.length;
    if (val === -1) this._currentReview = reviews.length - 1;
    this.updateReview(reviews[this.reviewIndex]);
  },
  get reviewIndex() {
    return this._currentReview;
  },

  init: function () {
    this.updateReview(reviews[this.reviewIndex]);
    this.addListeners();
  },
  updateReview: function (review) {
    this.img.src = review.img;
    this.author.textContent = review.name;
    this.job.textContent = review.job;
    this.info.textContent = review.text;
  },
  displayRandomReview: function () {
    let randomIndex = this.getRandomIdx();
    while (randomIndex === this.reviewIndex) randomIndex = this.getRandomIdx();
    this.reviewIndex = randomIndex;
  },
  getRandomIdx: () => {
    return Math.floor(Math.random() * reviews.length);
  },
  addListeners: function () {
    this.prevBtn.addEventListener('click', () => this.switchReview('prev'));
    this.nextBtn.addEventListener('click', () => this.switchReview('next'));
    this.randomBtn.addEventListener('click', () => this.displayRandomReview());
  },
  switchReview: function (direction) {
    if (direction == 'prev') --this.reviewIndex;
    if (direction == 'next') ++this.reviewIndex;
  },
};

window.addEventListener('DOMContentLoaded', () => app.init());
