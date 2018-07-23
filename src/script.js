

$(document).ready(function(){
    $("#hamburger").click(function(){
        $("#mobile-nav").toggle();
    });
});

// scrool Reveal easy scroll animations for web and mobile browsers
window.sr = ScrollReveal();
sr.reveal('.header-content');
sr.reveal('.fa-play-circle');
sr.reveal('.desktop', { duration: 2000 }, 50);

sr.reveal('#two', {
    duration: 2000,
});

sr.reveal('#three', {
    duration: 500,
});

sr.reveal('#four', {
    duration: 500,
});

sr.reveal('#five', {
    duration: 500,
    useDelay: 'always'

});
sr.reveal('#six', {
    duration: 500,
    useDelay: 'always'

});
sr.reveal('#seven', {
    duration: 500,
    useDelay: 'always'

});

