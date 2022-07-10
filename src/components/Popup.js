export default class Popup {
  constructor(popup) {
    this._popup = document.querySelector(popup);
    this._closeButton = this._popup.querySelector('.popup__close');
    this._escapeClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_visible');
    document.addEventListener('keydown', this._escapeClose);
  }

  close() {
    this._popup.classList.remove('popup_visible');
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
    this._popup.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('popup')) {
        this.close();
      }
    });
  }
}
