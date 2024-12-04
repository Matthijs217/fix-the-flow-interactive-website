const dropDown = document.querySelector('.dropdownarrow');
const header = document.querySelector('header'); // Selecteer de header
const switchRouwTaken = document.querySelector('.switchrouwtaken'); // Selecteer het element

dropDown.addEventListener('click', () => {
    if (dropDown.style.transform === 'rotate(180deg)') {
        // Zet hem terug naar normaal
        dropDown.style.transform = 'rotate(0deg)';
        header.classList.remove('header2'); // Verwijder de nieuwe class van de header
        header.classList.add('header'); // Voeg de originele class weer toe
        switchRouwTaken.style.display = 'none'; // Verberg switchRouwTaken
    } else {
        // Draai hem 180 graden
        dropDown.style.transform = 'rotate(180deg)';
        header.classList.remove('header'); // Verwijder de originele class van de header
        header.classList.add('header2'); // Voeg de nieuwe class toe
        switchRouwTaken.style.display = 'flex'; // Toon switchRouwTaken
    }
});


let showPopup = document.querySelectorAll('.comudrops-btn');

showPopup.forEach(button => {
    button.addEventListener('click', () => {
        console.log('click');
        document.querySelector('.popup').style.display = 'flex';
    });
});

let closePopup = document.querySelector('.popup-header img');

closePopup.addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none';

});
