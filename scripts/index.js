// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

function createCard(link, name, deleteCard, appendCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__image').alt = name;
    cardElement.querySelector('.card__title').textContent = name;
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    
    cardDeleteButton.addEventListener('click', function() {
        deleteCard(cardElement);
    });

    return cardElement;
}

function appendCard(cardElement) {
    cardList.append(cardElement);
}

function deleteCard(cardElement) {
    cardElement.remove();
}

initialCards.forEach(function(card) {
    const newCard = createCard(card.link, card.name, deleteCard, appendCard);
    appendCard(newCard);
});