const header = document.querySelector('header');
gsap.registerPlugin(ScrollTrigger);

//Header
gsap.fromTo('header', 
{
    opacity: 0,
},
{
    opacity: 1,
    duration: 2,
});

window.addEventListener('scroll', () => {
    if(window.scrollY > header.offsetHeight) {
        header.classList.add('bg-dark');
    } else {
        header.classList.remove('bg-dark');
    }
})

// Hero section
gsap.fromTo('.hero-section__title', 
{
    opacity: 0,
    x: -100,
},
{
    opacity: 1,
    x: 0,
    duration: 1,
});

gsap.fromTo('.hero-section__subtitle', 
{
    opacity: 0,
    x: 100,
},
{
    opacity: 1,
    x: 0,
    duration: 1,
});

gsap.fromTo('.hero-section__buttons', 
{
    opacity: 0,
    y: 100,
},
{
    opacity: 1,
    y: 0,
    duration: 1,
    delay: .4
});

//Features
gsap.fromTo('.features-section .feature', 
{
    opacity: 0,
    x: -100,
},
{
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: '.feature',
});
