// const menuBtn = document.querySelector('.menu');
// const menuActive = document.querySelector('.menu__active');
// let menuOpen = false;

// menuBtn.addEventListener('click', () => {
//     if (!menuOpen) {
//         menuBtn.classList.add('open');

//         menuOpen = true;

//     } else {
//         menuBtn.classList.remove('open');

//         menuOpen = false;
//     }
// })



$(document).ready(function() {

    let menuTl = new TimelineMax({
        paused: true
    });

    menuTl
        .from("nav ul li", 0, {
            display: "none"
        })
        .staggerFrom("nav ul li", 0.3, {
            x: 40,
            opacity: 0
        }, 0.1)
        .to(".toggler .open", 0.1, {
            opacity: 0
        })
        .to(".toggler .close", 0.1, {
            opacity: 1
        });
    menuTl.play();

    $(".toggler").click(() => {
        menuTl.reversed() ? menuTl.play() : menuTl.reverse();
    });

    $(document).scroll(function() {
        $(this).scrollTop() > 100 ? menuTl.reverse() : menuTl.play();
    });
});