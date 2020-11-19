(function () {

    let userCards = [];
    let n = 1;

    function randomCard() {
        const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
        let card = cards[Math.floor(Math.random() * cards.length)];
        userCards.push(card);
        let imageCard = "url(images/playing-card-" + Number(card) + ".png)";
        document.getElementById("card-"+ n).style.backgroundImage = imageCard;
        n++;
        getSum();
        document.getElementById("getCard").innerHTML = "Pick a new card";
        delete card;
    }

    document.getElementById("getCard").addEventListener("click", randomCard);


function getSum() {
    const sumCards = userCards.reduce((sum, currentValue) => 
    sum + currentValue) ;
    
    if (sumCards == 21) {
alert("You win!")
    }
    else if (sumCards > 21) {
alert("You Lose!")
    }



}

document.getElementById("stopTurn").addEventListener("click", getSum);



    // let cardsValue 





    function restart() {
        window.location.reload();
    }


    document.getElementById("newGame").addEventListener("click", restart);


})();