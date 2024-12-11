const dropDown = document.querySelector('.dropdownarrow');
const header = document.querySelector('header'); // Selecteer de header
const switchRouwTaken = document.querySelector('.switchrouwtaken'); // Selecteer het element

// Initialiseer de dropdown functionaliteit
dropDown.addEventListener('click', toggleDropdown);

function toggleDropdown() {
    const isExpanded = dropDown.style.transform === 'rotate(180deg)';

    if (document.startViewTransition) {
        document.startViewTransition(() => updateDropdown(!isExpanded));
    } else {
        updateDropdown(!isExpanded);
    }
}

// Functie om de dropdownstatus te updaten
function updateDropdown(expand) {
    if (expand) {
        dropDown.style.transform = 'rotate(180deg)';
        header.classList.replace('header', 'header2'); // Vervang de originele class van de header met de nieuwe class
        switchRouwTaken.classList.add('visible'); // Voeg de class 'visible' toe om switchRouwTaken te tonen
    } else {
        dropDown.style.transform = 'rotate(0deg)';
        header.classList.replace('header2', 'header'); // Vervang de originele class van de header met de nieuwe class
        switchRouwTaken.classList.remove('visible'); // Verberg switchRouwTaken
    }
}


let showPopup = document.querySelectorAll('.comudrops-btn'); // selecteer de button

showPopup.forEach(button => {
    button.addEventListener('click', () => { // als je klikt dan start de transition
        if (document.startViewTransition) {
            document.startViewTransition(popup)
        } else { // als er geen transition kan word getoond dan word de popup alsnog getoond
            popup()
        }
    });
});

function popup() {
    document.querySelector('.popup').style.display = 'flex'; // word de popup display flex en toont die dus
}


let closePopup = document.querySelector('.popup-header img'); // selecteert het pijltje terug 

closePopup.addEventListener('click', () => { // als je klikt dan word de popup display none en is die dus weer weg
    document.querySelector('.popup').style.display = 'none'; 

});
