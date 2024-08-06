import Reveal from 'reveal.js';

window.addEventListener("load", function() {
    let deck = new Reveal({
    });
    deck.initialize({
        autoSlide: 5000,
        loop: true,
        autoSlideStoppable: false
    });
});
