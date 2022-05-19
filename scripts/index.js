let popup = document.querySelector('.popup_profile');
let popupImg = document.querySelector('.popup_img');

let editBtn = document.querySelector('.profile__edit-btn');
let popupClose = document.querySelector('.popup__close');
let popupCloseImg = document.querySelector('.form__close_img');

let inputFirst = document.querySelector('.form__input_item_name');
let inputSecond = document.querySelector('.form__input_item_job');

let inputTarget = document.querySelector('.form__input_item_target');
let inputImg = document.querySelector('.form__input_item_url');

let form = document.querySelector('.form');
let formImg = document.querySelector('.form-img');

let profileSubtitle = document.querySelector('.profile__subtitle');
let profileTitle = document.querySelector('.profile__title');

let imgBtn = document.querySelector('.profile__image-btn');





function visible() {
  if (popup.classList.contains('popup_visible') === false) {
    popup.classList.add('popup_visible');
    inputFirst.value = profileSubtitle.textContent;
    inputSecond.value = profileTitle.textContent;
  } else {
    popup.classList.remove('popup_visible');
  }
}

function addImg() {
  if (popupImg.classList.contains('popup_visible') === false) {
    popupImg.classList.add('popup_visible');
    inputTarget.value = " ";
    inputImg.value = " ";
  } else {
    popupImg.classList.remove('popup_visible');
    inputTarget.value = " ";
    inputImg.value = " ";

  }
}


function addform(evt) {
  profileSubtitle.textContent = inputFirst.value;
  profileTitle.textContent = inputSecond.value;
  popup.classList.remove('popup_visible');
  evt.preventDefault();
}


imgBtn.addEventListener('click', addImg);
editBtn.addEventListener('click', visible);
popupClose.addEventListener('click', visible);
popupCloseImg.addEventListener('click', addImg);
form.addEventListener('submit', addform);
formImg.addEventListener('submit', addCards);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const template = document.querySelector('.element-template').content;
const elements = document.querySelector('.elements');


function addCards(evt) {
  const cardElement = template.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = inputImg.value;
  cardElement.querySelector('.element__text').textContent = inputTarget.value;
  cardElement.querySelector('.element__text').alt = inputTarget.value;
  cardElement.querySelector('.element__like-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-btn_active');
  });
  cardElement.querySelector('.element__trash').addEventListener('click', function (evt) {
    const listItem = evt.target.closest('.element');
    listItem.remove();
  });
  elements.prepend(cardElement);
  popupImg.classList.remove('popup_visible');
  evt.preventDefault();
}




initialCards.forEach (function(item){
  const cardElement = template.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = item.link;
  cardElement.querySelector('.element__text').textContent = item.name;
  cardElement.querySelector('.element__text').alt = item.name;
  cardElement.querySelector('.element__like-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-btn_active');
  });
  cardElement.querySelector('.element__trash').addEventListener('click', function (evt) {
    const listItem = evt.target.closest('.element');
    listItem.remove();
  });
  elements.append(cardElement);
});

