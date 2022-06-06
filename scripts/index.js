const popupList = Array.from(document.querySelectorAll('.popup'));

let popupProfile = document.querySelector('.popup_profile');
let popupImg = document.querySelector('.popup_url');

let editBtn = document.querySelector('.profile__edit-btn');
let popupClose = document.querySelector('.popup__close');
let popupCloseImg = document.querySelector('.popup__close-img');

let inputFirst = document.querySelector('.form__input_item_name');
let inputSecond = document.querySelector('.form__input_item_job');

let inputTarget = document.querySelector('.form__input_item_target');
let inputImg = document.querySelector('.form__input_item_url');

let formProfile = document.querySelector('.form');
let formImg = document.querySelector('.form-img');

let profileSubtitle = document.querySelector('.profile__subtitle');
let profileTitle = document.querySelector('.profile__title');

let imgBtn = document.querySelector('.profile__image-btn');



const elements = document.querySelector('.elements');


const popupImgPre = document.querySelector('.popup_item-img');
const imgPopup = document.querySelector('.popup__img');
const imgTitle = document.querySelector('.popup__title-img');

const imgClose = document.querySelector('.popup__close_item_img');

const template = document.querySelector('.element-template').content;



function popupEntrance(item) {
  item.classList.add('popup_visible');
}

function popupExit(item) {
  item.classList.remove('popup_visible');
}

function OpenEditProfile() {
  popupEntrance(popupProfile);
  inputFirst.value = profileSubtitle.textContent;
  inputSecond.value = profileTitle.textContent;
}

function addform(evt) {
  profileSubtitle.textContent = inputFirst.value;
  profileTitle.textContent = inputSecond.value;
  popupExit(popupProfile);
  evt.preventDefault();
}

function preview(evt) {
  popupEntrance(popupImgPre);

  imgPopup.src = evt.target.src;
  imgTitle.textContent = evt.target.alt;
  imgPopup.alt = evt.target.alt;

};


function CreatElement(link, name) {
  const cardElement = template.querySelector('.element').cloneNode(true);
  const cardImg = cardElement.querySelector('.element__image');
  cardElement.querySelector('.element__text').textContent = name;
  const switchlike = cardElement.querySelector('.element__like-btn');
  const delElement = cardElement.querySelector('.element__trash');
  cardImg.src = link;
  cardImg.alt = name;
  switchlike.addEventListener('click', function (evt) { evt.target.classList.toggle('element__like-btn_active'); });
  delElement.addEventListener('click', function (evt) { const listItem = evt.target.closest('.element'); listItem.remove(); });
  cardImg.addEventListener('click', preview);
  return cardElement;
}


function addCards(evt) {
  evt.preventDefault();
  const cardElement = CreatElement(inputImg.value, inputTarget.value);
  elements.prepend(cardElement);
  inputImg.value=" ";
  inputTarget.value=" ";
  popupExit(popupImg);
}


initialCards.forEach(function (item) {
  const cardElement = CreatElement(item.link, item.name);
  elements.append(cardElement);
});

function verificationClass() {
  popupList.forEach((popupElement) => {
  popupElement.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup')) {
    evt.target.classList.remove('popup_visible'); 
 }
   });
  })
}
verificationClass();



editBtn.addEventListener('click', OpenEditProfile);
popupClose.addEventListener('click', () => { popupExit(popupProfile); });
formProfile.addEventListener('submit', addform);
imgBtn.addEventListener('click', () => { popupEntrance(popupImg); });
popupCloseImg.addEventListener('click', () => { popupExit(popupImg); });
formImg.addEventListener('submit', addCards);
imgClose.addEventListener('click', () => { popupExit(popupImgPre); });
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    popupList.forEach((popupElement) => {
      popupExit(popupElement);
    });
  }
});

