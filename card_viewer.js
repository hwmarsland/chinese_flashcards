// import { nextCard } from "./card_list";
// import { previousCard } from "./card_list";
import { flipCard } from "./card_list.js";


// Setting starting value for flashcard
document.getElementById("cardText").innerHTML = flipCard(document.getElementById("curTextType").innerHTML);


/*
Setting up the functionality of the up arrow button
*/
const upArrow = document.getElementById("upArrow")

upArrow.addEventListener('click', function handleUpClick() {
    console.log('Up arrow button clicked');
    //Handling the visual changes
    if (document.getElementById("curTextType").innerHTML == "Characters") {
        //Setting button text
        document.getElementById("upTextType").innerHTML = "▲ English ▲";
        document.getElementById("curTextType").innerHTML = "Pinyin";
        document.getElementById("downTextType").innerHTML = "▼ Characters ▼";
        //Setting flashcard text
        document.getElementById("cardText").innerHTML = flipCard("Pinyin");
    }
    else if (document.getElementById("curTextType").innerHTML == "Pinyin") {
        //Setting button text
        document.getElementById("upTextType").innerHTML = "▲ Characters ▲";
        document.getElementById("curTextType").innerHTML = "English";
        document.getElementById("downTextType").innerHTML = "▼ Pinyin ▼";
        //Setting flashcard text
        document.getElementById("cardText").innerHTML = flipCard("English");
    }
    else if (document.getElementById("curTextType").innerHTML == "English") {
        //Setting button text
        document.getElementById("upTextType").innerHTML = "▲ Pinyin ▲";
        document.getElementById("curTextType").innerHTML = "Characters";
        document.getElementById("downTextType").innerHTML = "▼ English ▼";
        //Setting flashcard text
        document.getElementById("cardText").innerHTML = flipCard("Characters");
    }
    else {
        console.log('SOMETHING IS WRONG: You shouldnt be here')
    }
});


/*
Setting up the functionality of the down arrow button
*/
const downArrow = document.getElementById("downArrow")

downArrow.addEventListener('click', function handleDownClick() {
    console.log('Down arrow button clicked');
    //Handling the visual changes
    if (document.getElementById("curTextType").innerHTML == "Characters") {
        //Setting button text
        document.getElementById("upTextType").innerHTML = "▲ Characters ▲";
        document.getElementById("curTextType").innerHTML = "English";
        document.getElementById("downTextType").innerHTML = "▼ Pinyin ▼";
        //Setting flashcard text
        document.getElementById("cardText").innerHTML = flipCard("English");
    }
    else if (document.getElementById("curTextType").innerHTML == "Pinyin") {
        //Setting button text
        document.getElementById("upTextType").innerHTML = "▲ Pinyin ▲";
        document.getElementById("curTextType").innerHTML = "Characters";
        document.getElementById("downTextType").innerHTML = "▼ English ▼";
        //Setting flashcard text
        document.getElementById("cardText").innerHTML = flipCard("Characters");
    }
    else if (document.getElementById("curTextType").innerHTML == "English") {
        //Setting button text
        document.getElementById("upTextType").innerHTML = "▲ English ▲";
        document.getElementById("curTextType").innerHTML = "Pinyin";
        document.getElementById("downTextType").innerHTML = "▼ Characters ▼";
        //Setting flashcard text
        document.getElementById("cardText").innerHTML = flipCard("Pinyin");
    }
    else {
        console.log('SOMETHING IS WRONG: You shouldnt be here')
    }
});


/*
Setting up the functionality of the previous card button
*/
const previousCard = document.getElementById("previousCardButton")

previousCard.addEventListener('click', function handlePrevCardClick() {
    console.log('Previous card button clicked');
    // previousCard();
});


/*
Setting up the functionality of the next card button
*/
const nextCard = document.getElementById("nextCardButton")

nextCard.addEventListener('click', function handleNextCardClick() {
    console.log('Next card button clicked');
    // nextCard();
});