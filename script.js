(function () {

    // Global variables 
    let userCards = [];
    let n = 1;
    let d = 1;
    let sumCards;
    let sumDealer;
    let dealerCards = [];

    // event listeners
    document.getElementById("getCard").addEventListener("click", randomCard);
    document.getElementById("newGame").addEventListener("click", restart);
    document.getElementById("stopTurn").addEventListener("click", dealerCard);



    // Function to get a random card  
    function randomCard() {
        const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        let card = cards[Math.floor(Math.random() * cards.length)];
        userCards.push(card);
        let imageCard = "url(images/playing-card-" + Number(card) + ".png)";
        document.getElementById("card-" + n).style.backgroundImage = imageCard;
        n++;
        getSum();
    }



    // Function to calculate the sum of the users cards
    function getSum() {
        sumCards = userCards.reduce((sum, currentValue) =>
            sum + currentValue);

        if (sumCards == 21) {
            alert("That's 21!! Wow, great, you win!")
        } else if (sumCards > 21) {
            alert("Bust! That's more than 21... You Lose!")
        }
    }


    // Function to get random cards for the dealer
    function dealerCard() {
        const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        let card = cards[Math.floor(Math.random() * cards.length)];
        dealerCards.push(card);
        let imageCard = "url(images/playing-card-" + Number(card) + ".png)";
        document.getElementById("dealer-" + d).style.backgroundImage = imageCard;
        d++;
        dealersTurn();
    }


    // Function to calculate the sum of the dealer cards + calculate who wins
    function dealersTurn() {

        sumDealer = dealerCards.reduce((sum, currentValue) =>
            sum + currentValue);

        if (sumDealer == 21 || sumDealer == sumCards || sumDealer > sumCards && sumDealer < 21) {
            alert("Dealer wins! That means you lose... ");
        } else if (sumDealer < sumCards) {
            dealerCard();
        } else {
            alert("You win! Great job!");
        }

    }


    // function to refresh the page, to start a new game
    function restart() {
        window.location.reload();
    }




})();