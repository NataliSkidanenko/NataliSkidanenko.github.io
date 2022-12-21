{
    const modalMenu = document.querySelector('.modal-block');
    const buttonOpenMenu = document.querySelector('#menu-open');
    const buttonCloseMenu = document.querySelector('#menu-close');
    buttonOpenMenu.addEventListener('click', openMenu);
    buttonOpenMenu.addEventListener('touchstart', openMenu);
    buttonCloseMenu.addEventListener('click', closeMenu);
    buttonCloseMenu.addEventListener('touchstart', closeMenu);

    function openMenu() {
        modalMenu.classList.add('animation-in');
        modalMenu.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        modalMenu.classList.remove('animation-in');
        modalMenu.classList.add('animation-out');

        setTimeout(() => {
            modalMenu.classList.remove('animation-out');
            modalMenu.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }
}
