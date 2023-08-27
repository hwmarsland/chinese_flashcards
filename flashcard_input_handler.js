/*
FLASHCARD INPUT HANDLER

This file takes the inputs read in from the FLASHCARD GUI file and makes the necessary changes to be
sent back and update the flashcard GUI

Harris Marsland
*/

import { sampleDeck } from "./deck_storage.js";

// Keeps track of the card being displayed
var cardIndexPointer = 0;
// Keeps track of the deck currently in use
export var cardDeck = sampleDeck;

//Array that is traversed to facilitate the flipping card and avoid repetitive switch statements
const sideLabels = [
    {up: "▲ English ▲", cur: "Pinyin", down: "▼ Characters ▼"}, //Pinyin side
    {up: "▲ Characters ▲", cur: "English", down: "▼ Pinyin ▼"}, //English side
    {up: "▲ Pinyin ▲", cur: "Characters", down: "▼ English ▼"}, //Characters side
]

// Used to set all of the values on the buttons and on the flashcard itself to the correct values when a jump occurs (Not up or down arrow press)
export function setSide(side) {
    //Setting button text
    document.getElementById("upTextType").innerHTML = sideLabels[side].up; // upTextType refers to the English/Pinyin/Characters distinction shown on the up arrow button
    document.getElementById("curTextType").innerHTML = sideLabels[side].cur;
    document.getElementById("downTextType").innerHTML = sideLabels[side].down;
    //Setting flashcard text
    document.getElementById("cardText").innerHTML = flipCard(side);
    curSide = side;
}

// Function that handles how the progression through the side list wraps so the index always stays in bounds
export function nextSide(step) {
    curSide = (curSide + 3 + step) % 3;
    setSide(curSide);
}

// Function that transitions to the next card in the deck
export function nextCard(){
    cardIndexPointer += 1;
    cardIndexPointer = cardIndexPointer%cardDeck.cards.length;
};

// Function that transitions to the previous card in the deck
export function previousCard(){
    cardIndexPointer -= 1;
    cardIndexPointer += cardDeck.cards.length;
    cardIndexPointer = cardIndexPointer%cardDeck.cards.length;
};

// Function that grabs the text for the body of the current flashcard
export function flipCard(cardSide){
    if (cardSide == 2){
        return(cardDeck.cards[cardIndexPointer].characters);
    }
    else if (cardSide == 0){
        return(cardDeck.cards[cardIndexPointer].pinyin);
    }
    else if (cardSide == 1){
        return(cardDeck.cards[cardIndexPointer].english);
    }
    else {
        console.log("SOMETHING IS WRONG: You shouldnt be here") // Progression tracking
    }
};