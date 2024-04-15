const cardTemplate = document.querySelector('#card-template').content;
export const cardList = document.querySelector('.places__list');

export function createCard(link, name, deleteCard, likeCard, handleImagePopup) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    cardImg.src = link;
    cardImg.alt = name;
    cardTitle.textContent = name;

    const card = {
        name: name,
        link: link
    };

    cardDeleteButton.addEventListener('click', function() {
        deleteCard(cardElement);
    });

    cardElement.querySelector('.card__like-button').addEventListener('click', likeCard);

    cardImg.addEventListener('click', () => handleImagePopup(card));

    return cardElement;
}

export function deleteCard(cardElement) {
    cardElement.remove();
}

export function likeCard(cardElement) {
    cardElement.target.classList.toggle('card__like-button_is-active');
}










