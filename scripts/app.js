document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    toggleBtn.addEventListener('click', toggleSidebar);
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const toggleBtn = document.getElementById('toggle-btn');

    sidebar.classList.toggle('closed');
    mainContent.classList.toggle('closed');
    toggleBtn.classList.toggle('closed');
}