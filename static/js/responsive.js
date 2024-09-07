// JavaScript to toggle the hamburger menu on and off for responsive design
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        hamburger.style.display = 'block';
        navList.classList.remove('show');
    } else {
        hamburger.style.display = 'none';
        navList.classList.remove('show');
    }
});

// Initially check the screen width and set hamburger visibility accordingly
if (window.innerWidth <= 768) {
    hamburger.style.display = 'block';
} else {
    hamburger.style.display = 'none';
}
