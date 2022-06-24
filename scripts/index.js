
import FormValidator from './validate.js';
import Card from './cards.js';



export const popupList = Array.from(document.querySelectorAll('.popup'));
export const popupProfile = document.querySelector('.popup_profile');
export const popupImg = document.querySelector('.popup_url');
export const editBtn = document.querySelector('.profile__edit-btn');
export const popupClose = document.querySelector('.popup__close');
export const popupCloseImg = document.querySelector('.popup__close-img');
export const inputFirst = document.querySelector('.form__input_item_name');
export const inputSecond = document.querySelector('.form__input_item_job');
export const inputTarget = document.querySelector('.form__input_item_target');
export const inputImg = document.querySelector('.form__input_item_url');
export const formProfile = document.querySelector('.form');
export const formImg = document.querySelector('.form-img');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const profileTitle = document.querySelector('.profile__title');
export const imgBtn = document.querySelector('.profile__image-btn');
export const elements = document.querySelector('.elements');
export const popupImgPre = document.querySelector('.popup_item-img');
export const imgPopup = document.querySelector('.popup__img');
export const imgTitle = document.querySelector('.popup__title-img');
export const imgClose = document.querySelector('.popup__close_item_img');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const obj = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}
function handleEscPress(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_visible');
    popupExit(popup);
  };
};

export function popupEntrance(item) {
  item.classList.add('popup_visible');
  document.addEventListener("keydown", handleEscPress);
}

export function popupExit(item) {
  item.classList.remove('popup_visible');
  document.removeEventListener("keydown", handleEscPress);
}

function OpenEditProfile() {
  inputFirst.value = profileSubtitle.textContent;
  inputSecond.value = profileTitle.textContent;
  popupEntrance(popupProfile);
}
export const resetButtonSave = (obj, item) => {
  const buttonReset = item.querySelector(obj.submitButtonSelector);
  buttonReset.classList.add(obj.inactiveButtonClass);
};
function addform(evt) {
  profileSubtitle.textContent = inputFirst.value;
  profileTitle.textContent = inputSecond.value;
  popupExit(popupProfile);
  resetButtonSave(obj, popupProfile);
  evt.preventDefault();
}



const addCard = (name, link) => {
  const card = new Card(name, link, '.element-template').generateCard();
  elements.prepend(card);
};

formImg.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard(inputTarget.value, inputImg.value);
  inputTarget.value = '';
  inputImg.value = '';
  popupExit(popupImg);
  resetButtonSave(obj, popupImg);
});

const addInitialCards = (array) => {
  array.forEach((item) => {
    const card = new Card(item.name, item.link, '.element-template').generateCard();
    elements.prepend(card);
  })
};

addInitialCards(initialCards);


function verificationClass() {
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
        popupExit(evt.target);
      }
    });
  })
}
verificationClass();

const formProfileValidator = new FormValidator(obj, formProfile);
formProfileValidator.enableValidation();
const formAddCardValidator = new FormValidator(obj, formImg);
formAddCardValidator.enableValidation();


editBtn.addEventListener('click', () => { OpenEditProfile() });
popupClose.addEventListener('click', () => { popupExit(popupProfile) });
formProfile.addEventListener('submit', addform);
imgBtn.addEventListener('click', () => { popupEntrance(popupImg) });
popupCloseImg.addEventListener('click', () => { popupExit(popupImg) });

