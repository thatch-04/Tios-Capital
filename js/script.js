// An ‘in shuffle’ is a perfect shuffle on a standard deck of 52 playing cards that splits the deck in half, then interleaves cards starting with the top half.
 
// * What is the position of the first card after the 7th shuffle?
// * How many times must one perform the shuffle so that the top card becomes the bottom card?
// * When do the first and last cards in the deck touch?


//set up deck

let deck = ['As', 'Ks', 'Qs', 'Js', '10s', '9s', '8s', '7s', '6s', '5s', '4s', '3s', '2s',
            'Ac', 'Kc', 'Qc', 'Jc', '10c', '9c', '8c', '7c', '6c', '5c', '4c', '3c', '2c',
            'Ah', 'Kh', 'Qh', 'Jh', '10h', '9h', '8h', '7h', '6h', '5h', '4h', '3h', '2h',
            'Ad', 'Kd', 'Qd', 'Jd', '10d', '9d', '8d', '7d', '6d', '5d', '4d', '3d', '2d'];


const resetDeck = () => {
    deck = ['As', 'Ks', 'Qs', 'Js', '10s', '9s', '8s', '7s', '6s', '5s', '4s', '3s', '2s',
    'Ac', 'Kc', 'Qc', 'Jc', '10c', '9c', '8c', '7c', '6c', '5c', '4c', '3c', '2c',
    'Ah', 'Kh', 'Qh', 'Jh', '10h', '9h', '8h', '7h', '6h', '5h', '4h', '3h', '2h',
    'Ad', 'Kd', 'Qd', 'Jd', '10d', '9d', '8d', '7d', '6d', '5d', '4d', '3d', '2d'];
}

//set up shuffler function

const perfectShuffle = (numShuffles) => {

    for(let i=0; i<numShuffles; i++){
        let shuffledDeck = [];
        let topHalfDeck = deck.slice(0, 26);
        let botHalfDeck = deck.slice(26);
        let currentCard = '';

        for(let j=0; j<52; j++){
            if(j%2 === 0){
                currentCard = topHalfDeck.pop();
                shuffledDeck.splice(0, 0, currentCard);
                //console.log(currentCard)
            }
            else {
                currentCard = botHalfDeck.pop();
                shuffledDeck.splice(0, 0, currentCard)
                //console.log(currentCard)
            }
        }
        //console.log(shuffledDeck);
        deck = shuffledDeck;
    }

    // console.log(deck)
    return deck
}


/*
FIND THE POSITION OF THE TOP CARD AFTER 7 SHUFFLES
*/

resetDeck()
//find position of what was the top card after 7 shuffles (index of card + 1 since arrays are base 0)
perfectShuffle(7);
//Could set up a dynamic variable to capture top card before the 7 shuffles but given that we know the card we're looking for I chose to hard code it
let position = deck.findIndex((card) => card === 'As') + 1;
console.log(`The position of the card that was on top before shuffling (As) is ${position}`)

/*
FIND THE SHUFFLE COUNTS WHERE THE TOP AND BOTTOM CARDS TOUCH
*/

//reset deck to initial state
resetDeck()
let shuffleNumber = 0;

//loop to shuffle deck until the bottom card is either directly above or directly below (touching) the top card
while(deck.findIndex((card) => card === 'As') !== deck.findIndex((card) => card === '2d')+1 && deck.findIndex((card) => card === 'As') !== deck.findIndex((card) => card === '2d')-1){
    perfectShuffle(1)
    shuffleNumber++
}

console.log(`It took ${shuffleNumber} shuffles for the top card and the bottom card to touch`)

/*
FIND THE NUMBER OF SHUFFLES TO SHUFFLE THE TOP CARD BACK TO THE TOP OF THE DECK
*/

resetDeck()
//shuffle once to remove the top card from the top of the deck and set up a variable to track the number of shuffles
perfectShuffle(1)
let shuffleCount = 1;
//loop single shuffles until the As returns to index position 0 (top of the deck) iterate the count after each shuffle to track the number of shuffles
while(deck.findIndex((card) => card === 'As') !== 0){
    perfectShuffle(1)
    shuffleCount++
}
console.log(`It took ${shuffleCount} shuffles for the top card to make it back to the top of the deck`)