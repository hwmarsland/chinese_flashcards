const sampleDeck = {    
    name: "sampleDeck",
    cards: [
    {characters: '搬', pinyin: 'bān', english: 'to move'},
    {characters: '但是', pinyin: 'dànshì', english: 'but'},
    {characters: '必须', pinyin: 'bìxū', english: 'must'},
    {characters: '房租', pinyin: 'fángzū', english: 'to rent'},
    {characters: '楼上', pinyin: 'lóushàng', english: 'upstairs'},
    {characters: '马上', pinyin: 'mǎshàng', english: 'immediately'},
    {characters: '房东', pinyin: 'fángdōng', english: 'landlord'},
    {characters: '房客', pinyin: 'fángkè', english: 'tentant'},
    {characters: '以后', pinyin: 'yǐhòu', english: 'after'},
    {characters: '好像', pinyin: 'hǎoxiàng', english: 'to seem like'},
    ]
}

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
        console.log("SOMETHING IS WRONG: You shouldnt be here")
    }
};