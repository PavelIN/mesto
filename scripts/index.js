const popupList = Array.from(document.querySelectorAll('.popup'));

const popupProfile = document.querySelector('.popup_profile');
const popupImg = document.querySelector('.popup_url');

const editBtn = document.querySelector('.profile__edit-btn');
const popupClose = document.querySelector('.popup__close');
const popupCloseImg = document.querySelector('.popup__close-img');

const inputFirst = document.querySelector('.form__input_item_name');
const inputSecond = document.querySelector('.form__input_item_job');

const inputTarget = document.querySelector('.form__input_item_target');
const inputImg = document.querySelector('.form__input_item_url');

const formProfile = document.querySelector('.form');
const formImg = document.querySelector('.form-img');

const profileSubtitle = document.querySelector('.profile__subtitle');
const profileTitle = document.querySelector('.profile__title');

const imgBtn = document.querySelector('.profile__image-btn');



const elements = document.querySelector('.elements');


const popupImgPre = document.querySelector('.popup_item-img');
const imgPopup = document.querySelector('.popup__img');
const imgTitle = document.querySelector('.popup__title-img');

const imgClose = document.querySelector('.popup__close_item_img');

const template = document.querySelector('.element-template').content;



function handleEscPress(evt) {
  if (evt.key === 'Escape') {
    popupList.forEach((popup) => {
      if (popup.classList.contains('popup_visible')) {
        popupExit(popup);
      };
    });
  };
};

function popupEntrance(item) {
  item.classList.add('popup_visible');
  document.addEventListener("keydown", handleEscPress);
}

function popupExit(item) {
  item.classList.remove('popup_visible');
  document.removeEventListener("keydown", handleEscPress);
}

function OpenEditProfile() {
  inputFirst.value = profileSubtitle.textContent;
  inputSecond.value = profileTitle.textContent;
  popupEntrance(popupProfile);
}

function addform(evt) {
  profileSubtitle.textContent = inputFirst.value;
  profileTitle.textContent = inputSecond.value;
  popupExit(popupProfile);
  resetButtonSave(obj,popupProfile);
  evt.preventDefault();
}

function preview(evt) {
  imgPopup.src = evt.target.src;
  imgTitle.textContent = evt.target.alt;
  imgPopup.alt = evt.target.alt;
  popupEntrance(popupImgPre);
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
  inputImg.value="";
  inputTarget.value="";
  popupExit(popupImg);
  resetButtonSave(obj,popupImg);
}


initialCards.forEach(function (item) {
  const cardElement = CreatElement(item.link, item.name);
  elements.append(cardElement);
});

function verificationClass() {
  popupList.forEach((popupElement) => {
  popupElement.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup')) {
    popupExit(evt.target) ;
 }
   });
  })
}
verificationClass();



editBtn.addEventListener('click',() => { OpenEditProfile()});
popupClose.addEventListener('click', () => { popupExit(popupProfile)});
formProfile.addEventListener('submit', addform);
imgBtn.addEventListener('click', () => { popupEntrance(popupImg)});
popupCloseImg.addEventListener('click', () => { popupExit(popupImg)});
formImg.addEventListener('submit', addCards);
imgClose.addEventListener('click', () => { popupExit(popupImgPre)});



 
  

    