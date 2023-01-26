import { nextCard } from "./card_list.js";
import { previousCard } from "./card_list.js";
import { flipCard } from "./card_list.js";

// Variable that controls which side of the flashcard comes up first
//Default is Characters
var firstSide = 2;
var curSide = firstSide;

//Array that is traversed to facilitate the flipping card and avoid repetitive switch statements
const sideLabels = [
    {up: "▲ English ▲", cur: "Pinyin", down: "▼ Characters ▼"}, //Pinyin side
    {up: "▲ Characters ▲", cur: "English", down: "▼ Pinyin ▼"}, //English side
    {up: "▲ Pinyin ▲", cur: "Characters", down: "▼ English ▼"}, //Characters side
]

function setSide(side) {
    //Setting button text
    document.getElementById("upTextType").innerHTML = sideLabels[side].up;
    document.getElementById("curTextType").innerHTML = sideLabels[side].cur;
    document.getElementById("downTextType").innerHTML = sideLabels[side].down;
    //Setting flashcard text
    document.getElementById("cardText").innerHTML = flipCard(side);
    curSide = side;
}

function nextSide(step) {
    curSide = (curSide + 3 + step) % 3;
    setSide(curSide);
}

// Setting starting value for flashcard
setSide(curSide);
// switch(firstSide) {
//     case "Characters":
//         setSideCharacters();
//         break;
//     case "Pinyin":
//         setSidePinyin();
//         break;
//     case "English":
//         setSideEnglish();
// }


/*
Setting up the functionality of the up arrow button
*/
const upArrow = document.getElementById("upArrow")

function handleUpClick() {
    console.log('Up arrow button clicked');
    //Handling the visual changes
    nextSide(1);
    // switch(document.getElementById("curTextType").innerHTML) {
    //     case "Characters":
    //         setSidePinyin();
    //         break;
    //     case "Pinyin":
    //         setSideEnglish();
    //         break;
    //     case "English":
    //         setSideCharacters();
    // }
}

upArrow.addEventListener('click', function click() {
    handleUpClick();
});


/*
Setting up the functionality of the down arrow button
*/
const downArrow = document.getElementById("downArrow")

function handleDownClick() {
    console.log('Down arrow button clicked');
    //Handling the visual changes
    nextSide(-1);
    // switch(document.getElementById("curTextType").innerHTML) {
    //     case "Characters":
    //         setSideEnglish();
    //         break;
    //     case "Pinyin":
    //         setSideCharacters();
    //         break;
    //     case "English":
    //         setSidePinyin();
    // }
}

downArrow.addEventListener('click', function click() {
    handleDownClick();
});


/*
Setting up the functionality of the previous card button
*/
const previousCardButton = document.getElementById("previousCardButton")

function handlePrevCardClick() {
    console.log('Previous card button clicked');
    previousCard();
    setSide(firstSide);
    // switch(firstSide) {
    //     case "Characters":
    //         setSideCharacters();
    //         break;
    //     case "Pinyin":
    //         setSidePinyin();
    //         break;
    //     case "English":
    //         setSideEnglish();
    // }
}

previousCardButton.addEventListener('click', function click() {
    handlePrevCardClick();
});


/*
Setting up the functionality of the next card button
*/
const nextCardButton = document.getElementById("nextCardButton")

function handleNextCardClick() {
    console.log('Next card button clicked');
    nextCard();
    setSide(firstSide);
    // switch(firstSide) {
    //     case "Characters":
    //         setSideCharacters();
    //         break;
    //     case "Pinyin":
    //         setSidePinyin();
    //         break;
    //     case "English":
    //         setSideEnglish();
    // }
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


// /*
// Putting redundant code bits that set the card values in their own functions
// */
// function setSidePinyin() {
//     //Setting button text
//     document.getElementById("upTextType").innerHTML = "▲ English ▲";
//     document.getElementById("curTextType").innerHTML = "Pinyin";
//     document.getElementById("downTextType").innerHTML = "▼ Characters ▼";
//     //Setting flashcard text
//     document.getElementById("cardText").innerHTML = flipCard("Pinyin");
// }

// function setSideEnglish() {
//     //Setting button text
//     document.getElementById("upTextType").innerHTML = "▲ Characters ▲";
//     document.getElementById("curTextType").innerHTML = "English";
//     document.getElementById("downTextType").innerHTML = "▼ Pinyin ▼";
//     //Setting flashcard text
//     document.getElementById("cardText").innerHTML = flipCard("English");
// }

// function setSideCharacters() {
//     //Setting button text
//     document.getElementById("upTextType").innerHTML = "▲ Pinyin ▲";
//     document.getElementById("curTextType").innerHTML = "Characters";
//     document.getElementById("downTextType").innerHTML = "▼ English ▼";
//     //Setting flashcard text
//     document.getElementById("cardText").innerHTML = flipCard("Characters");
// }

/*
Creating the new settings menu window
*/
const settingsPanel = document.getElementById('settingsPanel')
const screenDarken = document.getElementById('screenDarken')
const cardSettings = document.getElementById('cardSettingsButton')

cardSettings.addEventListener('click', function showCardSettings() {
    showElement(settingsPanel, 1);
    showElement(screenDarken, 0.8);
    // settingsPanel.style.opacity = 1;
    // settingsPanel.style.pointerEvents = 'all';
    // screenDarken.style.opacity = 0.8;
    // screenDarken.style.pointerEvents = 'all';
});

const settingsSelect = document.getElementById('firstCardSideSelector')
const settingsApplyButton = document.getElementById("settingsApply")

settingsApplyButton.addEventListener('click', function handleSettingsApply() {
    console.log('Apply button clicked');
    switch(settingsSelect.options[settingsSelect.selectedIndex].text) {
        case "Characters":
            console.log('Characters set as default side');
            firstSide = 2;
            break;
        case "English":
            console.log('English set as default side');
            firstSide = 1;
            break;
        case "Pinyin":
            console.log('Pinyin set as default side');
            firstSide = 0;
    }
    setSide(firstSide);
    // switch(firstSide) {
    //     case "Characters":
    //         setSideCharacters();
    //         break;
    //     case "Pinyin":
    //         setSidePinyin();
    //         break;
    //     case "English":
    //         setSideEnglish();
    // }
    hideElement(settingsPanel);
    hideElement(screenDarken);
    // settingsPanel.style.opacity = 0;
    // settingsPanel.style.pointerEvents = 'none';
    // screenDarken.style.opacity = 0;
    // screenDarken.style.pointerEvents = 'none';
});

const settingsCancelButton = document.getElementById("settingsCancel")

settingsCancelButton.addEventListener('click', function handleSettingsCancel() {
    console.log('Cancel button clicked');
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
    // settingsPanel.style.opacity = 0;
    // settingsPanel.style.pointerEvents = 'none';
    // screenDarken.style.opacity = 0;
    // screenDarken.style.pointerEvents = 'none';
});

/*
Repeated code for hiding/showing html elements
*/
function hideElement(element) {
    element.style.opacity = 0;
    element.style.pointerEvents = 'none';
}

function showElement(element, opacity) {
    element.style.opacity = opacity;
    element.style.pointerEvents = 'all';
}