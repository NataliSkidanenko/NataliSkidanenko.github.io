(function () {
    document.addEventListener('mousemove', moveBackground);
    function moveBackground(e) {
        console.log(e);
        const bgFirst = document.querySelector('.parallax__bg--1');
        const bgSecond = document.querySelector('.parallax__bg--2');

        const bgFirstOffsetX = (e.clientX / window.innerWidth) * 10 - 20;
        const bgSecondOffsetX = (e.clientX / window.innerWidth) * 40 - 80;

        const bgFirstOffsetY = (e.clientY / window.innerHeight) * 10 - 20;
        const bgSecondOffsetY = (e.clientY / window.innerHeight) * 30 - 60;

        bgFirst.setAttribute(
            'style',
            `background-position: ${bgFirstOffsetX}px ${bgFirstOffsetY}px`
        );
        bgSecond.setAttribute(
            'style',
            `background-position: ${bgSecondOffsetX}px ${bgSecondOffsetY}px`
        );
    }
})();
