import FormValidator from '../components/validate.js';
import Card from "../components/Card.js";
import { editBtn, formProfile, obj, elements, formImg, imgBtn, initialCards, inputFirst, inputSecond } from "../components/tools.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import './index.css';

function EditProfileFormInputs({ name, job }) {
  inputFirst.value = name;
  inputSecond.value = job;
};

const userInfo = new UserInfo({
  name: '.profile__subtitle',
  job: '.profile__title'
});

const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleFormSubmit: (dataForm) => {
    userInfo.setUserInfo(dataForm);
    formEditProfileValidator.resetButtonSave();
    editProfilePopup.close();
  }
});
editProfilePopup.setEventListeners();

editBtn.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  EditProfileFormInputs({
    name: info.name,
    job: info.job
  });
  editProfilePopup.open();
});



const createCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: (name, Link) => {
      viewImagePopup.open(name, Link);
    }
  }, '.element-template');
  const cardElement = card.generateCard();
  return cardElement;
};



const addCardPopup = new PopupWithForm({
  popupSelector: '.popup_url',
  handleFormSubmit: (dataForm) => {
    cardsList.addItem(createCard(dataForm));
    formAddNewCardValidator.resetButtonSave();
    addCardPopup.close();
  }
});

addCardPopup.setEventListeners();

imgBtn.addEventListener('click', () => {
  addCardPopup.open();
})

const viewImagePopup = new PopupWithImage('.popup_item-img');
viewImagePopup.setEventListeners();


const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
}, elements);
cardsList.renderItems();


const formEditProfileValidator = new FormValidator(obj, formProfile);
formEditProfileValidator.enableValidation();
const formAddNewCardValidator = new FormValidator(obj, formImg);
formAddNewCardValidator.enableValidation();
