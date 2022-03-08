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
            console.log(menuLink);
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                console.log(gotoBlock);
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
          buttonClose = document.querySelectorAll('.skills__skill-close'),
          skillWrapper = document.querySelectorAll('.skills__skill-wrapper'),
          skillList = document.querySelectorAll('.skills__skill-list');
        
        

        function showList() {
            skillWrapper.forEach((item) => {
                item.classList.toggle('skills__skill-wrapper-active');
            });

            skillList.forEach((item) => {
                item.classList.toggle('skills__skill-list-active');
            });
        }

        function showWrapper() {
            skillWrapper.forEach((item) => {
                item.classList.toggle('skills__skill-wrapper-active');
            });

            skillList.forEach((item) => {
                item.classList.toggle('skills__skill-list-active');
            });
        }


        buttonOpen.forEach((btn) => {
            btn.addEventListener('click', showList);
        })

        buttonClose.forEach((btn) => {
            btn.addEventListener('click', showWrapper);
        })

    

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