import { resetButtonSave,obj } from "./validate.js";
import { initialCards } from "./cards.js";

const popupList = Array.from(document.querySelectorAll('.popup'));

const popupProfile = document.querySelector('.popup_profile');
const popupImg = document.querySelector('.popup_url');

const editBtn = document.querySelector('.profile__edit-btn');
const popupClose = document.querySelector('.popup__close');
const popupCloseImg = document.querySelector('.popup__close-img');

const inputFirst = document.querySelector('.form__input_item_name');
const inputSecond = document.querySelector('.form__input_item_job');

const inputTarget = document.querySelector('.form__input_item_target');
const inputImg = document.querySelector('.form__input_item_url');

export const formProfile = document.querySelector('.form');
export const formImg = document.querySelector('.form-img');

const profileSubtitle = document.querySelector('.profile__subtitle');
const profileTitle = document.querySelector('.profile__title');

const imgBtn = document.querySelector('.profile__image-btn');



const elements = document.querySelector('.elements');


const popupImgPre = document.querySelector('.popup_item-img');
const imgPopup = document.querySelector('.popup__img');
const imgTitle = document.querySelector('.popup__title-img');

const imgClose = document.querySelector('.popup__close_item_img');




function handleEscPress(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_visible');
    popupExit(popup);
  };
};

function popupEntrance(item) {
  item.classList.add('popup_visible');
  document.addEventListener("keydown", handleEscPress);
}

function popupExit(item) {
  item.classList.remove('popup_visible');
  document.removeEventListener("keydown", handleEscPress);
}

function OpenEditProfile() {
  inputFirst.value = profileSubtitle.textContent;
  inputSecond.value = profileTitle.textContent;
  popupEntrance(popupProfile);
}

function addform(evt) {
  profileSubtitle.textContent = inputFirst.value;
  profileTitle.textContent = inputSecond.value;
  popupExit(popupProfile);
  resetButtonSave(obj, popupProfile);
  evt.preventDefault();
}




class Card {
  constructor(name,link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__text').textContent = this._name;
    this._element.querySelector('.element__image').alt = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like-btn').addEventListener('click', () => {
    this._handleMessageClick();
    });
    this._element.querySelector('.element__trash').addEventListener('click', () => {
    this._handleTrashClick();
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
    this._previewClick();
    });
    imgClose.addEventListener('click', () => {
      this._closePopupImg();
    })
  }

  _handleMessageClick() {
    this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_active');
  }

  _handleTrashClick() {
    this._element.remove();
  }


  _previewClick() {
    imgPopup.src = this._link;
    imgTitle.textContent = this._name;
    imgTitle.alt = this._name;
    popupEntrance(popupImgPre);
  };
  _closePopupImg() {
    popupExit(popupImgPre);
  };

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


initialCards.forEach((item) => {
  const card = new Card(item.name,item.link,'.element-template');
  const cardElement = card.generateCard();

  elements.append(cardElement);
}); 

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



editBtn.addEventListener('click', () => { OpenEditProfile() });
popupClose.addEventListener('click', () => { popupExit(popupProfile) });
formProfile.addEventListener('submit', addform);
imgBtn.addEventListener('click', () => { popupEntrance(popupImg) });
popupCloseImg.addEventListener('click', () => { popupExit(popupImg) });















