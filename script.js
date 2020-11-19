(function () {

    // Global variables 
    let userCards = [];
    let n = 1;
    let d = 1;
    let sumCards;
    let sumDealer;

    // Function to get a random card  
    function randomCard() {
        const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        let card = cards[Math.floor(Math.random() * cards.length)];
        userCards.push(card);
        let imageCard = "url(images/playing-card-" + Number(card) + ".png)";
        document.getElementById("card-" + n).style.backgroundImage = imageCard;
        n++;
        getSum();
        delete card;
    }

    document.getElementById("getCard").addEventListener("click", randomCard);


    function getSum() {
        sumCards = userCards.reduce((sum, currentValue) =>
            sum + currentValue);

        if (sumCards == 21) {
            alert("You win!")
        } else if (sumCards > 21) {
            alert("You Lose!")
        }
    }

    document.getElementById("stopTurn").addEventListener("click", dealerCard);


    dealerCards = [0];

    function dealerCard() {
        const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        let card = cards[Math.floor(Math.random() * cards.length)];
        dealerCards.push(card);
        let imageCard = "url(images/playing-card-" + Number(card) + ".png)";
        document.getElementById("dealer-" + d).style.backgroundImage = imageCard;
        d++;
        dealersTurn();
    }



    function dealersTurn() {

        sumDealer = dealerCards.reduce((sum, currentValue) =>
            sum + currentValue);

        if (sumDealer == 21 || sumDealer == sumCards || ) {
            alert("Dealer wins! That means you lose... ");
        } else if (sumDealer > sumCards && sumDealer < 21) {
            alert("Dealer wins! That means you lose... ");
        } else if (sumDealer < sumCards) {
            dealerCard();
        } else {
            alert("You win! Great job!");
        }

    }





    function restart() {
        window.location.reload();
    }


    document.getElementById("newGame").addEventListener("click", restart);


})();