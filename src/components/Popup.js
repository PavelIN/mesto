export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._closeButton = this._popupSelector.querySelector('.popup__close');
    this._escapeClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add('popup_visible');
    document.addEventListener('keydown', this._escapeClose);
  }

  close() {
    this._popupSelector.classList.remove('popup_visible');
    document.removeEventListener('keydown', this._escapeClose);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });
    this._popupSelector.addEventListener('click', (event) => {
      if (event.target.classList.contains('popup')) {
        this.close();
      }
    });
  }
}
