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
            scrollTo(price);
        })
    });
    buttonPrice.forEach(function(e) {
        e.addEventListener('click', () => {
            scrollTo(contacts);
        })
    });
    

    //section _skills.

    const counters = document.querySelectorAll('.skills__item-percent'),
    lines = document.querySelectorAll('.skills__item-scale span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });
});