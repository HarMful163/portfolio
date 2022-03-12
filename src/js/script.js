window.addEventListener('DOMContentLoaded', function() {

    // menu header

    window.addEventListener("scroll", function() {
        const header = document.querySelector('header');
        header.classList.toggle("sticky", window.scrollY > 0);
    })

    //scroll

    const menuLinks = document.querySelectorAll('[data-goto]');

    if (menuLinks.length > 0) {
        menuLinks.forEach(i => {
            i.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        }
    }

    //_skills procents.

    const counters = document.querySelectorAll('.skills__item-percent'),
          lines = document.querySelectorAll('.skills__item-scale span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    // _skills cards

    const buttonOpen = document.querySelectorAll('.skills__skill-open'),
          buttonClose = document.querySelectorAll('.skills__skill-close');
  
        buttonOpen.forEach((item, i) => {
            item.addEventListener('click', () => {
                if(i == 0) {
                    const html5 = document.querySelectorAll('.skills__html5');
                    html5.forEach(item => {
                        item.classList.toggle('skills__skill-list-active');
                        item.classList.toggle('skills__skill-wrapper-active');
                    })
                } if(i == 1) {
                    const css3 = document.querySelectorAll('.skills__css3');
                    css3.forEach(item => {
                        item.classList.toggle('skills__skill-wrapper-active');
                        item.classList.toggle('skills__skill-list-active');
                    });
                } if(i == 2) {
                    const js = document.querySelectorAll('.skills__js');
                    js.forEach(item => {
                        item.classList.toggle('skills__skill-wrapper-active');
                        item.classList.toggle('skills__skill-list-active');
                    });
                } if(i == 3) {
                    const figma = document.querySelectorAll('.skills__figma');
                    figma.forEach(item => {
                        item.classList.toggle('skills__skill-wrapper-active');
                        item.classList.toggle('skills__skill-list-active');
                    });
                }
            });
        });

        buttonClose.forEach((item, i) => {
            item.addEventListener('click', () => {
                if(i == 0) {
                    const html5 = document.querySelectorAll('.skills__html5');
                    html5.forEach(item => {
                        item.classList.toggle('skills__skill-list-active');
                        item.classList.toggle('skills__skill-wrapper-active');
                    })
                } if(i == 1) {
                    const css3 = document.querySelectorAll('.skills__css3');
                    css3.forEach(item => {
                        item.classList.toggle('skills__skill-wrapper-active');
                        item.classList.toggle('skills__skill-list-active');
                    });
                } if(i == 2) {
                    const js = document.querySelectorAll('.skills__js');
                    js.forEach(item => {
                        item.classList.toggle('skills__skill-wrapper-active');
                        item.classList.toggle('skills__skill-list-active');
                    });
                } if(i == 3) {
                    const figma = document.querySelectorAll('.skills__figma');
                    figma.forEach(item => {
                        item.classList.toggle('skills__skill-wrapper-active');
                        item.classList.toggle('skills__skill-list-active');
                    });
                }
            });
        });

    //menu 

    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
    
});