function alterarStatus(gameId) {
    const gameItem = document.getElementById(`game-${gameId}`);
    const button = gameItem.querySelector('.dashboard__item__button');

    if (button.innerText == "Alugar") {
        button.innerText = "Devolver";
        button.classList.add('dashboard__item__button--return');
        gameItem.querySelector('.dashboard__item__img').classList.add('dashboard__item__img--rented');
    } else {
        button.innerText = "Alugar";
        button.classList.remove('dashboard__item__button--return');
        gameItem.querySelector('.dashboard__item__img').classList.remove('dashboard__item__img--rented');
    }
}