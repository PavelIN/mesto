export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
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
    this._image = this._element.querySelector('.element__image');
    this._like = this._element.querySelector('.element__like-btn');
    this._setEventListeners();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;

    return this._element;
  }

  _setEventListeners() {

    this._image.addEventListener('click', () => {
      this._handleOpenPopup()
    })

    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleDeleteCard();
    })

    this._element.querySelector('.element__like-btn').addEventListener('click', () => {
      this._handleLikeCard();
    })
  }

  _handleLikeCard() {
    this._like.classList.toggle('element__like-btn_active');
  }


  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }


  _handleOpenPopup() {
    this._handleCardClick(this._name, this._link);
  }

  
}
