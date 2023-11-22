const mobile_nav = document.querySelector('.mobile-nav');
const close = document.querySelector('.close');
const hidden = document.querySelector('.hidden');
const gam_menu = document.querySelector('.gamburger-menu');

gam_menu.addEventListener('click', () => {
    hidden.style.display = 'block';
    mobile_nav.style.display = 'block';
    mobile_nav.classList.add('open');
});

close.addEventListener('click', () => {
    hidden.style.display = 'none';
    mobile_nav.style.display = 'none';
    mobile_nav.classList.remove('open');
});
