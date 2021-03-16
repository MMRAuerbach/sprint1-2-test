console.log("main.js file loaded");

const htmlBody = document.body;
const theButtons = document.querySelectorAll('.button_light');

const firstButton = document.querySelector('.switch_theme');
console.log(theButtons);

if (firstButton) {
    console.log('Hallo goedemiddag meneer de Jong en meneer van der Linden');
    firstButton.addEventListener('click', changeTheme);
}

function changeTheme() {
    htmlBody.classList.toggle('the_body_dark');
    for (let i = 0; i < theButtons.length; i++) {
        const changeButton = theButtons[i];
        changeButton.classList.toggle('button_dark');
        changeButton.classList.toggle('button_light');
    }

    console.log('Theme switched');
}

