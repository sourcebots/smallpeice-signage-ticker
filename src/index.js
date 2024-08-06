import Reveal from 'reveal.js';

window.addEventListener("load", function() {
    let deck = new Reveal({});
    deck.initialize({
        autoSlide: 10000,
        loop: true,
        hash: true,
        controls: false,
    });
});
