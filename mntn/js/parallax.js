{
    document.addEventListener('mousemove', moveBackground);
    function moveBackground(e) {
        console.log(e);
        const bgFirst = document.querySelector('.parallax__bg--1');
        const bgSecond = document.querySelector('.parallax__bg--2');

        const bgFirstOffsetX = (e.clientX / window.innerWidth) * 10 - 5;
        const bgFirstOffsetY = (e.clientY / window.innerHeight) * 10 - 5;
        const bgSecondOffsetX = (e.clientX / window.innerWidth) * 40 - 20;
        const bgSecondOffsetY = (e.clientY / window.innerHeight) * 30 - 15;

        bgFirst.setAttribute(
            'style',
            `background-position: calc(50% + ${bgFirstOffsetX}px) calc(50% + ${bgFirstOffsetY}px)`
        );
        bgSecond.setAttribute(
            'style',
            `background-position: calc(50% + ${bgSecondOffsetX}px) calc(50% + ${bgSecondOffsetY}px)`
        );
    }
}
