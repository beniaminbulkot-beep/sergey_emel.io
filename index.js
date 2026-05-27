const items = document.querySelectorAll('.nav-item');
items.forEach(item => {
    item.addEventListener('click', function(event) {
        items.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

const burgerToggle = document.getElementById('burgerToggle');
const navMenu = document.getElementById('navMenu');

burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
})