/*
DECK STORAGE

This file handles the decks themselves. It has containers for all prebuilt as well as all user built decks. 
Contains the default structures for both the deck and card objects (that go in the decks)
Contains functions to add a card to a deck and add a completed deck to the deck list

Harris Marsland
*/

// List that contains all decks that come default with the program
const prebuiltDeckList = []

// List that contains all user created decks
const userDeckList = []

// Default deck that contains cards and is added to decklist
const defaultDeck = {
    name: "Deck Name",
    description: "Deck description",
    cards: []
}

// Default card that is added to decks
const defaultCard = {
    characters: "中文",
    pinyin: "zhongwen", // !!! Does this need to be changed to something other than "pinyin" to account for other languages?
    english: "chinese"
}

// Function to add cards to a given deck
function addCard(card, destinationDeck){
    destinationDeck.cards.push(card)
    console.log('Successfully added ' + card + ' to ' + destinationDeck) // Progression Tracking

}

// Function to add deck to decklist
function addDeck(deck){
    prebuiltDeckList.push(deck)
    console.log('Successfully added ' + deck + ' to decklist') // Progression Tracking
}



// ADD BELOW TO DECK CREATOR JAVASCRIPT FILE

// export const sampleDeck = {    
//     name: "sampleDeck",
//     cards: [
//     {characters: '搬', pinyin: 'bān', english: 'to move'},
//     {characters: '但是', pinyin: 'dànshì', english: 'but'},
//     {characters: '必须', pinyin: 'bìxū', english: 'must'},
//     {characters: '房租', pinyin: 'fángzū', english: 'to rent'},
//     {characters: '楼上', pinyin: 'lóushàng', english: 'upstairs'},
//     {characters: '马上', pinyin: 'mǎshàng', english: 'immediately'},
//     {characters: '房东', pinyin: 'fángdōng', english: 'landlord'},
//     {characters: '房客', pinyin: 'fángkè', english: 'tentant'},
//     {characters: '以后', pinyin: 'yǐhòu', english: 'after'},
//     {characters: '好像', pinyin: 'hǎoxiàng', english: 'to seem like'},
//     ]
// }

// export const l1_101 = {
//     name: "Chinese 101: Lesson 1",
//     cards: [
//         {characters: '伱', pinyin: 'nǐ', english: 'you'},
//         {characters: '好', pinyin: 'hǎo', english: 'good, well'},
//         {characters: '是', pinyin: 'shì', english: 'to be, (affirmative answer) yes'},
//         {characters: '学生', pinyin: 'xuésheng', english: 'student'},
//         {characters: '学', pinyin: 'xué', english: 'to study, to learn'},
//         {characters: '吗', pinyin: 'ma', english: '(used at the end of a declarative sentence to transtorm it into a question)'},
//         {characters: '我 ', pinyin: 'wǒ', english: 'I, me'},
//         {characters: '呢', pinyin: 'ne', english: '(used at the end of an interrogative sentence)'},
//         {characters: '也', pinyin: 'yě', english: 'also'},
//         {characters: '他', pinyin: 'tā', english: 'he, him'},
//         {characters: '不', pinyin: 'bù', english: '(used to form a negative) not, no'},
//         {characters: '老师', pinyin: 'lǎoshī', english: 'teacher'},
//         {characters: '中文', pinyin: 'Zhōngwén', english: 'Chinese (language)'},
//         {characters: '她', pinyin: 'tā', english: 'she, her'},
//         {characters: '教授', pinyin: 'jiàoshòu', english: 'professor'},
//     ]
// }

// export const l2_101 = {    
//     name: "Chinese 101: Lesson 2",
//     cards: [
//     {characters: '您', pinyin: 'nín', english: '(polite) you'},
//     {characters: '贵', pinyin: 'guì', english: 'noble, honored, expensive'},
//     {characters: '姓', pinyin: 'xìng', english: 'N. surname, family name; V. have as a surname'},
//     {characters: '请问', pinyin: 'qǐng wèn', english: 'may I ask'},
//     {characters: '请', pinyin: 'qǐng', english: '(polite) please'},
//     {characters: '问', pinyin: 'wèn', english: 'to ask'},
//     {characters: '的', pinyin: 'de', english: '(a structural particle used to show possession'},
//     {characters: '英文', pinyin: 'Yingwén', english: 'English (language)'},
//     {characters: '名字', pinyin: 'míngzi', english: 'name'},
//     {characters: '中文', pinyin: 'Zhōngwén', english: 'Chinese (language)'},
//     {characters: '叫', pinyin: 'jiào', english: 'to call, to be called'},
//     {characters: '什么', pinyin: 'shénme', english: 'what'},
//     {characters: '她', pinyin: 'tā', english: 'she, her'},
//     {characters: '谁', pinyin: 'shéi/shuí', english: 'who, whom'},
//     {characters: '同学', pinyin: 'tóngxué', english: 'classmate'},
//     {characters: '同', pinyin: 'tóng', english: 'same, similar'},
//     ]
// }