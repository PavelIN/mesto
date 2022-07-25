export default class Card {
  constructor({ data,userId, handleCardClick,handleDeleteCard}, cardSelector) {
    console.log(userId);
    this._handleDeleteCard = handleDeleteCard
    this._cardId = data._id
    this._cardOwnerId = data.owner._id;
    this._userId = userId;
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
    this._deleteTrash = this._element.querySelector('.element__trash');
    this._setEventListeners();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;
    this._hasDeleteBtn();
    return this._element;
  }

  _setEventListeners() {

    this._image.addEventListener('click', () => {
      this._handleOpenPopup()
    })

    this._deleteTrash.addEventListener('click', () => {
      this._handleDeleteCard(this._cardId);
      
    })

    this._like.addEventListener('click', () => {
      this._handleLikeCard();
    })
  }

  _handleLikeCard() {
    this._like.classList.toggle('element__like-btn_active');
  }


  deleteCard() {
    this._element.remove();
    this._element = null;
  }


  _handleOpenPopup() {
    this._handleCardClick(this._name, this._link);
  }

  _hasDeleteBtn() {
    if (this._userId !== this._cardOwnerId) {
      this._deleteTrash.remove();
    }
  }
  
}
