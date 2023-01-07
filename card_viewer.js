const upArrow = document.getElementById("upArrow")

upArrow.addEventListener('click', function handleUpClick() {
    console.log('Up arrow button clicked');
    //Handling the visual changes
    if (document.getElementById("curTextType") == "Characters") {

    }
    else if (document.getElementById("curTextType") == "Characters") {

    }
    else if (document.getElementById("curTextType") == "Characters") {

    }
    else {
        console.log('SOMETHING IS WRONG: You shouldnt be here')
    }
    document.getElementById("cardText").innerHTML = "New Card";

});


const downArrow = document.getElementById("downArrow")

downArrow.addEventListener('click', function handleDownClick() {
    console.log('Down arrow button clicked');
});



const previousCard = document.getElementById("previousCardButton")

previousCard.addEventListener('click', function handlePrevCardClick() {
    console.log('Previous card button clicked');
});



const nextCard = document.getElementById("nextCardButton")

nextCard.addEventListener('click', function handleNextCardClick() {
    console.log('Next card button clicked');
});