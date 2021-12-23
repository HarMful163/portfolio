window.addEventListener('DOMContentLoaded', function() {

    // menu header

    window.addEventListener("scroll", function() {
        const header = document.querySelector('header');
        header.classList.toggle("sticky", window.scrollY > 0);
    })

    //scroll

    const buttonAbout = document.querySelectorAll('.header-about'),
          about = document.querySelector('#about'),
          buttonExperiance = document.querySelectorAll('.header-experiance'),
          experiance = document.querySelector('#experiance'),
          buttonSkills = document.querySelectorAll('.header-skills'),
          skills = document.querySelector('#skills'),
          buttonWorks = document.querySelectorAll('.header-works'),
          works = document.querySelector('#works'),
          buttonPrice = document.querySelectorAll('.header-price'),
          price = document.querySelector('#price'),
          buttonContacts = document.querySelectorAll('.header-contacts'),
          contacts = document.querySelector('#contacts');

    function scrollTo(element) {
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth'
        })
    }
    buttonAbout.forEach(function(e) {
        e.addEventListener('click', () => {
            scrollTo(about);
        })
    });
    buttonExperiance.forEach(function(e) {
        e.addEventListener('click', () => {
            scrollTo(experiance);
        })
    });
    buttonSkills.forEach(function(e) {
        e.addEventListener('click', () => {
            scrollTo(skills);
        })
    });
    buttonWorks.forEach(function(e) {
        e.addEventListener('click', () => {
            scrollTo(works);
        })
    });
    buttonContacts.forEach(function(e) {
        e.addEventListener('click', () => {
            scrollTo(contacts);
        })
    });
    buttonPrice.forEach(function(e) {
        e.addEventListener('click', () => {
            scrollTo(price);
        })
    });
    

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