(function () {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 200) {
            header.classList.add('header--fixed');
            return;
        }
        if (window.scrollY < 100) {
            header.classList.remove('header--fixed');
            return;
        }
    });
})();
