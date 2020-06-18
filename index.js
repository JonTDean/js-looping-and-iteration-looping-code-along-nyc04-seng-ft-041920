// Code your solutions in this file

    // Writes the text to be stored in new Array
function writeCards(cards){
    let writtenCards = []                                               //  Creates empty Array

    for(let i = 0; i < cards.length ; i++){                             //  Iterates through Given Array
        //  Pushes data into new array
        writtenCards.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);   
    }

    return writtenCards;
};

function countDown(num){
    while(num != 0){
        console.log(num) ;
        num-- ;
    }
    console.log(num) ;
}
