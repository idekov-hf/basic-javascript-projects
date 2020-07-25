// I attemped to use event delegation: a combination of
// actions in markup and the “behavior” pattern as described
// here: https://javascript.info/event-delegation

const sidebar = document.querySelector('.sidebar');

document.addEventListener('click', function (evt) {
  const action = evt.target.dataset.action;
  if (!action) return;
  sidebar.classList[action]('show-sidebar');
});
