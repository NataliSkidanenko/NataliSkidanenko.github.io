{
    const modalMenu = document.querySelector('.modal-block');
    const buttonOpenMenu = document.querySelector('#menu-open');
    const buttonCloseMenu = document.querySelector('#menu-close');

    buttonOpenMenu.addEventListener('click', openMenu);
    buttonCloseMenu.addEventListener('click', closeMenu);
    // buttonOpenMenu.addEventListener('touchstart', openMenu);
    // buttonCloseMenu.addEventListener('touchstart', closeMenu);

    function openMenu() {
        // e.preventDefault();
        modalMenu.classList.add('animation-in');
        modalMenu.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        return false;
    }

    function closeMenu() {
        // e.preventDefault();
        modalMenu.classList.remove('animation-in');
        modalMenu.classList.add('animation-out');

        setTimeout(() => {
            modalMenu.classList.remove('animation-out');
            modalMenu.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
        return false;
    }
}
