import Popup from "../components/Popup.js";

export default class DeletePopupCard extends Popup {
  constructor(popup) {
    super(popup);
    this._popupForm = this._popup.querySelector('.form__save');
  }


submitCallback(remov) {
    this._handleSubmit = remov;
  }

setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('click', (event) => {
      event.preventDefault();
      this._handleSubmit();
    });
  }
}