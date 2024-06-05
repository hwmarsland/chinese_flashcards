/*
FLASHCARD GUI

This file allows the buttons to be clicked and sends messages to the handler file to have
the inputs handled.

Harris Marsland
*/


/*
Imports
*/
import {nextSide} from "../flashcard_input_handler";
import {previousCard} from "../flashcard_input_handler";
import {nextCard} from "../flashcard_input_handler";

// Setting the deck name header
document.getElementById("deckName").innerHTML = cardDeck.name;

// Setting starting value for flashcard
setSide(curSide);

/*
Setting up the functionality of the up arrow button
*/
const upArrow = document.getElementById("upArrow")

function handleUpClick() {
    console.log('Up arrow button clicked'); // Progression Tracking
    //Handling the visual changes
    nextSide(1);
}

upArrow.addEventListener('click', function click() {
    handleUpClick();
});


/*
Setting up the functionality of the down arrow button
*/
const downArrow = document.getElementById("downArrow")

function handleDownClick() {
    console.log('Down arrow button clicked'); // Progression Tracking
    //Handling the visual changes
    nextSide(-1);
}

downArrow.addEventListener('click', function click() {
    handleDownClick();
});


/*
Setting up the functionality of the previous card button
*/
const previousCardButton = document.getElementById("previousCardButton")

function handlePrevCardClick() {
    console.log('Previous card button clicked'); // Progression Tracking
    previousCard();
    setSide(firstSide);
}

previousCardButton.addEventListener('click', function click() {
    handlePrevCardClick();
});


/*
Setting up the functionality of the next card button
*/
const nextCardButton = document.getElementById("nextCardButton")

function handleNextCardClick() {
    console.log('Next card button clicked'); // Progression Tracking
    nextCard();
    setSide(firstSide);
}

nextCardButton.addEventListener('click', function click() {
    handleNextCardClick();
});


/*
Adding key press functionality to the program
*/
document.addEventListener('keydown', function (keyPress) {
    switch (keyPress.key) {
        case "ArrowUp":
            handleUpClick();
            break;
        case "ArrowDown":
            handleDownClick();
            break;
        case "ArrowLeft":
            handlePrevCardClick();
            break;
        case "ArrowRight":
            handleNextCardClick();
    }
});


/*
Creating the settings menu window
*/
const settingsPanel = document.getElementById('settingsPanel')
const screenDarken = document.getElementById('screenDarken')
const cardSettings = document.getElementById('cardSettingsButton')

// Adds a reaction when the settings button is clicked
cardSettings.addEventListener('click', function showCardSettings() {
    showElement(settingsPanel, 1);
    showElement(screenDarken, 0.8);
});

const settingsSelect = document.getElementById('firstCardSideSelector')
const settingsApplyButton = document.getElementById("settingsApply")

// Changes the settings when the apply button is clicked and hides menu
settingsApplyButton.addEventListener('click', function handleSettingsApply() {
    console.log('Apply button clicked'); // Progression Tracking
    switch(settingsSelect.options[settingsSelect.selectedIndex].text) {
        case "Characters":
            console.log('Characters set as default side'); // Progression Tracking
            firstSide = 2;
            break;
        case "English":
            console.log('English set as default side'); // Progression Tracking
            firstSide = 1;
            break;
        case "Pinyin":
            console.log('Pinyin set as default side'); // Progression Tracking
            firstSide = 0;
    }
    setSide(firstSide);
    hideElement(settingsPanel);
    hideElement(screenDarken);
});

const settingsCancelButton = document.getElementById("settingsCancel")

// Resets to the previous settings when the cancel button is clicked and hides menu
settingsCancelButton.addEventListener('click', function handleSettingsCancel() {
    console.log('Cancel button clicked'); // Progression Tracking
    switch(firstSide) {
        case 2:
            settingsSelect.value = 'charactersFirst';
            break;
        case 0:
            settingsSelect.value = 'pinyinFirst';
            break;
        case 1:
            settingsSelect.value = 'englishFirst';;
    }
    hideElement(settingsPanel);
    hideElement(screenDarken);
});