(function () {

    // Global variables 
    let userCards = [];
    let n = 1;
    let d = 1;
    let sumCards;
    let sumDealer;
    let dealerCards = [];
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const cardsDealer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // event listeners
    document.getElementById("getCard").addEventListener("click", randomCard);
    document.getElementById("newGame").addEventListener("click", restart);
    document.getElementById("stopTurn").addEventListener("click", dealerCard);



    // Function to get a random card  
    function randomCard() {
        let card = cards[Math.floor(Math.random() * cards.length)];
        userCards.push(card);

        //Get the card image that belongs to the random card
        let imageCard = "url(images/playing-card-" + Number(card) + ".png)";
        document.getElementById("card-" + n).style.backgroundImage = imageCard;
        n++;

        // Remove drawn card from pool
        const index = cards.indexOf(Number(card));
        cards.splice(index, 1);

        getSum();
    }



    // Function to calculate the sum of the users cards
    function getSum() {
        sumCards = userCards.reduce((sum, currentValue) =>
            sum + currentValue);

        if (sumCards == 21) {
            setTimeout(function(){  alert("That's 21!! Wow, great, you win!"); }, 300);
        } else if (sumCards > 21) {
            setTimeout(function(){   alert("Bust! That's more than 21... You Lose!"); }, 300);
        }
    }


    // Function to get random cards for the dealer
    function dealerCard() {
        let card = cardsDealer[Math.floor(Math.random() * cards.length)];
        dealerCards.push(card);
        
         //Get the card image that belongs to the random card
        let imageCard = "url(images/playing-card-" + Number(card) + ".png)";
        document.getElementById("dealer-" + d).style.backgroundImage = imageCard;
        d++;

        // Remove drawn card from pool
        const index = cardsDealer.indexOf(Number(card));
        cardsDealer.splice(index, 1);

        dealersTurn();
    }


    // Function to calculate the sum of the dealer cards + calculate who wins
    function dealersTurn() {

        sumDealer = dealerCards.reduce((sum, currentValue) =>
            sum + currentValue);

        if (sumCards == undefined) {
            alert("Please hit some cards before you press stand, except if you want to lose...");
        } else if (sumDealer < sumCards) {
            dealerCard();
        } else if (sumDealer == 21 || sumDealer == sumCards || sumDealer > sumCards && sumDealer < 21) {
            setTimeout(function(){ alert("Dealer wins! That means you lose... \nYou had " + sumCards + ". Dealer had " + sumDealer +".");}, 300);
        } else {
            setTimeout(function(){  alert("You win! Great job! \nYou had " + sumCards + ". Dealer had " + sumDealer + ".");}, 300);
        }
    }


    // function to refresh the page, to start a new game
    function restart() {
        window.location.reload();
    }




})();