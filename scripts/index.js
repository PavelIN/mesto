let popup = document.querySelector('.popup_profile');
let popupImg = document.querySelector('.popup__url');

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



const elements = document.querySelector('.elements');



function popupEntrance(item) {
  item.classList.add('popup_visible');
}

function popupExit(item) {
  item.classList.remove('popup_visible');
}

function OpenEditProfile() {
  popupEntrance(popup);
  inputFirst.value = profileSubtitle.textContent;
  inputSecond.value = profileTitle.textContent;
}

function addform(evt) {
  profileSubtitle.textContent = inputFirst.value;
  profileTitle.textContent = inputSecond.value;
  popupExit(popup);
  evt.preventDefault();
}

function togglelike (el) {
  el.querySelector('.element__like-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-btn_active');
    }); 
}

function delElement (el) {
  el.querySelector('.element__trash').addEventListener('click', function (evt) {
    const listItem = evt.target.closest('.element');
    listItem.remove();
    }); 
}





function CreatElement(link,name) {
const template = document.querySelector('.element-template').content;
const cardElement = template.querySelector('.element').cloneNode(true);
const cardImg = cardElement.querySelector('.element__image');
cardElement.querySelector('.element__text').textContent = name;
const imgClose = document.querySelector('.popup__close_item_img');
cardImg.src = link;
cardImg.alt = name;
togglelike (cardElement);
delElement (cardElement);
cardImg.addEventListener('click', Preview);
imgClose.addEventListener('click', () => { popupExit(popupImgPre); });
return cardElement;
}


function addCards(evt) {
evt.preventDefault();
const cardElement = CreatElement(inputImg.value,inputTarget.value);
elements.prepend(cardElement);
popupExit(popupImg);
}


initialCards.forEach (function(item){
  const cardElement = CreatElement(item.link,item.name);
elements.append(cardElement);
});

editBtn.addEventListener('click', OpenEditProfile);
popupClose.addEventListener('click', () => { popupExit(popup); });
form.addEventListener('submit', addform);
imgBtn.addEventListener('click', () => { popupEntrance(popupImg); });
popupCloseImg.addEventListener('click', () => { popupExit(popupImg); });
formImg.addEventListener('submit', addCards);









const popupImgPre = document.querySelector('.popup_item-img');
const imgPopup = document.querySelector('.popup__img');
const imgTitle = document.querySelector('.popup__title-img');
const imgClose = document.querySelector('.popup__close_item_img');


function Preview (evt) { 
  popupEntrance (popupImgPre);

  imgPopup.src = evt.target.src;
  imgTitle.textContent = evt.target.alt;
  imgPopup.alt = evt.target.alt;
  
};