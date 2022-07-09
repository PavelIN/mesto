import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupSelector.querySelector('.popup__img');
    this._popupName = this._popupSelector.querySelector('.popup__title-img');
  }

  open (name, link) {
    this._popupImage.src = link;
    this._popupName.textContent = name;
    this._popupImage.alt = name;
    super.open();
  }
}
