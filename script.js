const bar = document.getElementById('bar');
const svgclose = document.getElementById('svgclose');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (svgclose) {
    svgclose.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}