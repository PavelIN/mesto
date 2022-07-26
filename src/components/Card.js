export default class Card {
  constructor({ data,userId, handleCardClick,handleDeleteCard,handleAddLike,handleRemoveLike}, cardSelector) {
    console.log(userId);
    this._handleDeleteCard = handleDeleteCard
    this._cardId = data._id
    this._likes = data.likes
    this._cardOwnerId = data.owner._id;
    this._userId = userId;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
    console.log(data);
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
    this._likeText = this._element.querySelector('.element__like-counter');
    this._likeText.textContent = this._likes.length;
    this._setEventListeners();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;
    this._hasDeleteBtn();
    this._checkCardLiked()
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
      if (this._like.classList.contains('element__like-btn_active')) {
        this._handleRemoveLike(this._cardId);
      } else {
        this._handleAddLike(this._cardId);
      }
    })
  }

  handleLikeCard(likes) {
    this._likes = likes.likes;
    this._likeText.textContent = this._likes.length;
    this._like.classList.toggle('element__like-btn_active');
  }

  _checkCardLiked() {
    if (this._likes.some((userId) => {
      return this._userId === userId._id;
    })) {
      this._like.classList.add('element__like-btn_active');
    }
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
