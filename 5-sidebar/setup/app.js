const sidebar = document.querySelector('.sidebar');
const toggleSidebar = document.querySelector('.sidebar-toggle');
const closeSidebar = document.querySelector('.close-btn');

toggleSidebar.addEventListener('click', (_) => {
  sidebar.classList.toggle('show-sidebar');
});

closeSidebar.addEventListener('click', (_) => {
  sidebar.classList.remove('show-sidebar');
});
