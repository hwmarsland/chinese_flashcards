const cards = [
    ['搬','bān','to move'],
    ['但是','dànshì','but'],
    ['必须','bìxū','must'],
    ['房租','fángzū','to rent'],
    ['楼上','lóushàng','upstairs'],
    ['马上','mǎshàng','immediately'],
    ['房东','fángdōng','landlord'],
    ['房客','fángkè','tentant'],
    ['以后','yǐhòu','after'],
    ['好像','hǎoxiàng','to seem like'],
]

// Keeps track of the card being displayed
var cardIndexPointer = 0;
// Keeps track of the deck currently in use
var cardDeck = cards;

function nextCard(){
    cardIndexPointer += 1;
    return (cardIndexPointer%cardDeck.length())
};

function previousCard(){
    cardIndexPointer -= 1;
    cardIndexPointer += cardDeck.length();
    return (cardIndexPointer%cardDeck.length())
};

document.getElementById("card_pointer").innerHTML = cardIndexPointer;