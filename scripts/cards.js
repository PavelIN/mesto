import { popupImgPre, imgPopup, imgTitle} from "./tools.js";
import { popupEntrance} from "./index.js";

export default class Card {
  constructor(name, link, cardSelector) {
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
    const elementImage = this._element.querySelector('.element__image');
    elementImage.src = this._link;
    this._element.querySelector('.element__text').textContent = this._name;
    elementImage.alt = this._name;
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
  }

  _handleMessageClick() {
    this._element.querySelector('.element__like-btn').classList.toggle('element__like-btn_active');
  }

  _handleTrashClick() {
    this._element.remove();
    this._element = null;
  }


  _previewClick() {
    imgPopup.src = this._link;
    imgTitle.textContent = this._name;
    imgTitle.alt = this._name;
    popupEntrance(popupImgPre);
  };
}