import "../pages/index.css";
import {initialCards} from "./cards.js";
import {createCard, deleteCard, appendCard, likeCard, cardList} from "./cardsFunction.js";
import {openPopUp, closePopUp, handleEscape} from "./modal.js";

const popUpEdit = document.querySelector('.popup_type_edit');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const popUpAdd = document.querySelector('.popup_type_new-card');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const popUpAddForm = document.querySelector('.popup_type_new-card .popup__form');
const inputNameCard = document.querySelector('.popup__input_type_card-name');
const inputLinkCard = document.querySelector('.popup__input_type_url');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

const popUpTypeImage = document.querySelector('.popup_type_image');
const popUpImage = document.querySelector('.popup__image');
const popUpImageCaption = document.querySelector('.popup__caption');

const formElement = document.querySelector('.popup__form');

initialCards.forEach(function(card) {
    const newCard = createCard(card.link, card.name, deleteCard, likeCard, handleImagePopup);
    appendCard(newCard);
})

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
    const closeButton = popup.querySelector('.popup__close');
    closeButton.addEventListener('click', (event) => {
        closePopUp(popup);
        
    })
    popup.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
      closePopUp(popup);
      
  }})
})

buttonAdd.addEventListener("click", () => { openPopUp(popUpAdd) });
buttonEdit.addEventListener("click", () => { 
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopUp(popUpEdit);
})


////изменение названия страницы
function handleFormSubmit(evt) {
    evt.preventDefault(); 
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopUp(popUpEdit);
}

function handleCardFormSubmit(evt) { 
  evt.preventDefault(); 
  const newCard = { 
    link: inputLinkCard.value, 
    name: inputNameCard.value
  } 
  const cardItem = createCard(newCard.link, newCard.name, deleteCard, likeCard, handleImagePopup);
  //appendCard(cardItem);
  cardList.prepend(cardItem); 
 
  popUpAddForm.reset();
  closePopUp(popUpAdd); 
}

function handleImagePopup(card) {
  popUpImage.src = card.link;
  popUpImageCaption.textContent = card.name;
  popUpImage.alt = card.name;
  openPopUp(popUpTypeImage);
}

popUpAddForm.addEventListener('submit', handleCardFormSubmit);
formElement.addEventListener('submit', handleFormSubmit); 



