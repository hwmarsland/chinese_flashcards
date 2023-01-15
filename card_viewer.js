import { nextCard } from "./card_list.js";
import { previousCard } from "./card_list.js";
import { flipCard } from "./card_list.js";


// Setting starting value for flashcard
document.getElementById("cardText").innerHTML = flipCard(document.getElementById("curTextType").innerHTML);


/*
Setting up the functionality of the up arrow button
*/
const upArrow = document.getElementById("upArrow")

function handleUpClick() {
    console.log('Up arrow button clicked');
    //Handling the visual changes
    switch(document.getElementById("curTextType").innerHTML) {
        case "Characters":
            setSidePinyin();
            break;
        case "Pinyin":
            setSideEnglish();
            break;
        case "English":
            setSideCharacters();
    }
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
    switch(document.getElementById("curTextType").innerHTML) {
        case "Characters":
            setSideEnglish();
            break;
        case "Pinyin":
            setSideCharacters();
            break;
        case "English":
            setSidePinyin();
    }
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
    setSideCharacters();
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
    setSideCharacters();
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
            console.log('Up arrow button clicked');
            handleUpClick();
            break;
        case "ArrowDown":
            console.log('Down arrow button clicked');
            handleDownClick();
            break;
        case "ArrowLeft":
            console.log('Previous card button clicked');
            handlePrevCardClick();
            break;
        case "ArrowRight":
            console.log('Next card button clicked');
            handleNextCardClick();
    }
});


/*
Putting redundant code bits that set the card values in their own functions
*/
function setSidePinyin() {
    //Setting button text
    document.getElementById("upTextType").innerHTML = "▲ English ▲";
    document.getElementById("curTextType").innerHTML = "Pinyin";
    document.getElementById("downTextType").innerHTML = "▼ Characters ▼";
    //Setting flashcard text
    document.getElementById("cardText").innerHTML = flipCard("Pinyin");
}

function setSideEnglish() {
    //Setting button text
    document.getElementById("upTextType").innerHTML = "▲ Characters ▲";
    document.getElementById("curTextType").innerHTML = "English";
    document.getElementById("downTextType").innerHTML = "▼ Pinyin ▼";
    //Setting flashcard text
    document.getElementById("cardText").innerHTML = flipCard("English");
}

function setSideCharacters() {
    //Setting button text
    document.getElementById("upTextType").innerHTML = "▲ Pinyin ▲";
    document.getElementById("curTextType").innerHTML = "Characters";
    document.getElementById("downTextType").innerHTML = "▼ English ▼";
    //Setting flashcard text
    document.getElementById("cardText").innerHTML = flipCard("Characters");
}