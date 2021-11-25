window.addEventListener('DOMContentLoaded', function() {

    // menu header

    window.addEventListener("scroll", function() {
        const header = document.querySelector('header');
        header.classList.toggle("sticky", window.scrollY > 0);
    })

    //scroll

    const button = document.querySelectorAll('.header-about'),
          about = document.querySelector('#about');

    function scrollTo(element) {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth'
        })
    }
    button.forEach(function(e) {
        e.addEventListener('click', () => {
            scrollTo(about);
        })
    });
});