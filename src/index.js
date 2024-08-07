import Reveal from 'reveal.js';

function setTime() {
    const time = (new Date()).toLocaleTimeString();

    for (const e of document.getElementsByClassName("current-time")) {
        e.innerText = time;
    }
}

window.addEventListener("load", function() {
    let deck = new Reveal({});
    deck.initialize({
        autoSlide: 10000,
        loop: true,
        hash: true,
        controls: false,
    });

    setInterval(setTime, 500);
});
