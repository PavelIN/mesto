import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popup, handleFormSubmit }) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.form');
    this._inputList = this._popupForm.querySelectorAll('.form__input');
    this._submitBtn = this._popupForm.querySelector('.form__save');
    this._submitBtnText = this._submitBtn.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
     console.log(this._formValues);
    })

    return this._formValues;
  }

  setInputValues(data){
    this._inputList.forEach((input) =>{
      // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
    input.value = data[input.name];
    });
  } 


  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }

  loading(Loading) {
    if (Loading) {
      this._submitBtn.textContent = 'Сохранение...'
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }

  close() {
  super.close();
  this._popupForm.reset();
  }
}
