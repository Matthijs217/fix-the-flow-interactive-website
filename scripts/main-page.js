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
        header.classList.remove('header'); // Verwijder de originele class van de header
        header.classList.add('header2'); // Voeg de nieuwe class toe
        switchRouwTaken.style.display = 'flex'; // Toon switchRouwTaken
    } else {
        dropDown.style.transform = 'rotate(0deg)';
        header.classList.remove('header2'); // Verwijder de nieuwe class van de header
        header.classList.add('header'); // Voeg de originele class weer toe
        switchRouwTaken.style.display = 'none'; // Verberg switchRouwTaken
    }
}


let showPopup = document.querySelectorAll('.comudrops-btn'); // selecteer de button

showPopup.forEach(button => {
    button.addEventListener('click', () => { // als je klikt dan
        document.startViewTransition ? document.startViewTransition(popup) : popup()
    });
});

function popup() {
    document.querySelector('.popup').style.display = 'flex'; // word de popup display flex en toont die dus
}


let closePopup = document.querySelector('.popup-header img'); // selecteert het pijltje terug 

closePopup.addEventListener('click', () => { // als je klikt dan
    document.querySelector('.popup').style.display = 'none'; // word de popup display none en is die dus weer weg

});
