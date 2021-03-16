console.log("main.js file loaded");

const switchButton = document.querySelector('.switch_theme');

if (switchButton) {
    switchButton.addEventListener('click', function() {
        const theBody = document.body;
        theBody.classList.toggle('the_body_dark');
    })
}