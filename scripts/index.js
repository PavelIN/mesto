
import FormValidator from './validate.js';
import Card from './cards.js';
import {initialCards,obj,popupImgPre,popupList,popupProfile,popupImg,editBtn,popupClose,popupCloseImg,inputFirst,
  inputSecond,inputTarget,inputImg,formProfile,formImg,profileSubtitle,profileTitle,imgBtn,elements,imgClose} from './tools.js';

export function popupEntrance(item) {
  item.classList.add('popup_visible');
  document.addEventListener("keydown", handleEscPress);
}

function handleEscPress(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_visible');
    popupExit(popup);
  };
};



export function popupExit(item) {
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
  evt.preventDefault();
  formProfileValidator.resetButtonSave();
}




const addCard = (name, link) => {
  const card = new Card(name, link, '.element-template');
  const cardElement = card.generateCard()
  elements.prepend(cardElement);
};

formImg.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const inputOne = inputTarget.value;
  const inputTwo = inputImg.value;
  addCard(inputOne, inputTwo);
  popupExit(popupImg);
  inputTarget.value = '';
  inputImg.value = '';
  formAddCardValidator.resetButtonSave();
});

const addInitialCards = (array) => {
  array.forEach((item) => {
    const card = new Card(item.name, item.link, '.element-template').generateCard();
    elements.prepend(card);
  })
};

addInitialCards(initialCards);


  
function verificationClass() {
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
        popupExit(evt.target);
      }
    });
  })
}
verificationClass();

const formProfileValidator = new FormValidator(obj, formProfile);
formProfileValidator.enableValidation();
const formAddCardValidator = new FormValidator(obj, formImg);
formAddCardValidator.enableValidation();

editBtn.addEventListener('click', () => { OpenEditProfile() });
popupClose.addEventListener('click', () => { popupExit(popupProfile) });
formProfile.addEventListener('submit', addform);
imgBtn.addEventListener('click', () => { popupEntrance(popupImg) });
popupCloseImg.addEventListener('click', () => { popupExit(popupImg) });
imgClose.addEventListener('click', () => { popupExit(popupImgPre) });

