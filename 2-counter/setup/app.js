const counter = {
  el: document.getElementById('value'),
  _count: 0,
  set value(val) {
    this._count = val;
    this.el.textContent = val;
    if (val > 0) this.el.style.color = 'green';
    else if (val < 0) this.el.style.color = 'red';
    else this.el.style.color = 'black';
  },
  get value() {
    return this._count;
  },
  decrease: function () {
    --this.value;
  },
  reset: function () {
    this.value = 0;
  },
  increase: function () {
    ++this.value;
  },
};

const btnContainer = document.querySelector('.button-container');
btnContainer.addEventListener('click', (evt) => {
  const action = evt.target.dataset.action;
  if (action) counter[action]();
});
