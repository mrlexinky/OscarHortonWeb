const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

window.addEventListener('scroll', () => {
    const video = document.getElementById('video');
    const scrollY = window.scrollY;
    const fadePoint = window.innerHeight / 5;
    const opacity = Math.max(0, 1 - scrollY / fadePoint);
    video.style.opacity = opacity;
});

window.addEventListener('scroll', () => {
    const video = document.getElementById('video');
    const header = document.querySelector('header');
    const scrollY = window.scrollY;
    const fadePoint = window.innerHeight * 0.1;

    // Fade out the background video
    const opacity = Math.max(0, 1 - scrollY / fadePoint);
    video.style.opacity = opacity;

    // Once past fade point, allow title to scroll
    if (scrollY > fadePoint) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});