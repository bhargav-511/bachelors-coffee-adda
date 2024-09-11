// var main = document.querySelector('#main-content');
// var navbar = document.querySelector('nav');

gsap.to('#navbar',{
    backgroundColor: '#000000',
    opacity: 1,
    scrollTrigger:{
        trigger: '#blur',
        start: '1% 0%',
        end: '2% 1%',
        scrub: true,
    }
});