import { sampleDeck } from "./deck_storage.js";

// Keeps track of the card being displayed
var cardIndexPointer = 0;
// Keeps track of the deck currently in use
export var cardDeck = sampleDeck;

export function nextCard(){
    cardIndexPointer += 1;
    cardIndexPointer = cardIndexPointer%cardDeck.cards.length;
};

export function previousCard(){
    cardIndexPointer -= 1;
    cardIndexPointer += cardDeck.cards.length;
    cardIndexPointer = cardIndexPointer%cardDeck.cards.length;
};

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