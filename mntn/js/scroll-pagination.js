{
    const allLinks = document.querySelectorAll('.scroll-pagination__list a');
    setInterval(function () {
        allLinks.forEach((menuLink) => {
            menuLink.classList.remove('active');
        });
        const currentLink = document.querySelector(
            `.scroll-pagination__link--${Math.round(window.scrollY / window.innerHeight)}`
        );
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }, 50);
}
