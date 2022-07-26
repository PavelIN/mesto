import FormValidator from '../components/FormValidator.js';
import Card from "../components/Card.js";
import { editBtn, formProfile, obj, elements, formImg, imgBtn, inputFirst, inputSecond,avatarEdit,formAvatar } from "../utils/tools.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Api from "../components/Api.js";
import DeletePopupCard from "../components/DeletePopupCard.js";
import './index.css';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: 'bda37d30-eb0b-48f8-b6b1-703e26a88ba5',
    'Content-Type': 'application/json'
  }
});


let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    cardsList.renderItems(initialCards);
  })
  .catch((error) => {
    console.log(`Ошибка: ${error}`);
  });

  
  
 

const userInfo = new UserInfo({
  name: '.profile__subtitle',
  job: '.profile__title',
  avatar: '.profile__avatar'
});

const editAvatar = new PopupWithForm({
  popup: '.popup_type_avatar',
  handleFormSubmit: (dataAvatar) => {
    editAvatar.loading(true)
    api.editAvatar(dataAvatar)
    .then((dataAvatar) => {
    userInfo.setUserInfo(dataAvatar);
    editAvatar.close();
    })
    .catch((error) => {
      console.log(`Ошибка: ${error}`);
    })
    .finally(() => {
      editAvatar.loading(false);
    });
  }
});
editAvatar.setEventListeners();

avatarEdit.addEventListener('click', () => {
  formAddNewAvatarValidator.resetValidation();
  editAvatar.open();
});

function editProfileFormInputs({ name, job }) {
  inputFirst.value = name;
  inputSecond.value = job;
};


const editProfilePopup = new PopupWithForm({
  popup: '.popup_profile',
  handleFormSubmit: (dataForm) => {
    editProfilePopup.loading(true);
    api.editUserInfo(dataForm)
    .then((dataForm) => {
      userInfo.setUserInfo(dataForm);
      editProfilePopup.close();
    })
    .catch((error) => {
      console.log(`Ошибка: ${error}`);
    })
    .finally(() => {
      editProfilePopup.loading(false);
    });
}
});
editProfilePopup.setEventListeners();

editBtn.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  editProfileFormInputs({
    name: info.name,
    job: info.job
  });
  editProfilePopup.open();
  formEditProfileValidator.resetValidation();
});

const deleteCardPopup = new DeletePopupCard ('.popup_type_delete-card');
deleteCardPopup.setEventListeners();


const createCard = (data) => {
  const card = new Card({
    data: data,
    userId: userId,
    handleCardClick: (name, Link) => {
      viewImagePopup.open(name, Link);
    },
    handleDeleteCard: (cardId) => {
      deleteCardPopup.open();
      deleteCardPopup.submitCallback(() => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCardPopup.close();
            card.deleteCard();
          })
          .catch((error) => {
            console.log(`Ошибка: ${error}`);
          });
      });
    },
    handleAddLike: (cardId) => {
      api.setLike(cardId) 
      .then((likes) => {
        card.handleLikeCard(likes);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
    },
    handleRemoveLike: (cardId) => {
      api.deleteLike(cardId) 
      .then((likes) => {
        card.handleLikeCard(likes);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
    },
  }, '.element-template');
  const cardElement = card.generateCard();
  return cardElement;
};



const addCardPopup = new PopupWithForm({
  popup: '.popup_url',
  handleFormSubmit: (dataForm) => {
    addCardPopup.loading(true);
    api.addCard(dataForm)
    .then((dataForm) => {
    cardsList.addItem(createCard(dataForm));
    addCardPopup.close();
    })
    .catch((error) => {
      console.log(`Ошибка: ${error}`);
    })
    .finally(() => {
      addCardPopup.loading(false);
    });
  }
});

addCardPopup.setEventListeners();

imgBtn.addEventListener('click', () => {
  formAddNewCardValidator.resetValidation();
  addCardPopup.open();
})

const viewImagePopup = new PopupWithImage('.popup_item-img');
viewImagePopup.setEventListeners();


const cardsList = new Section({
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
}, elements);




const formEditProfileValidator = new FormValidator(obj, formProfile);
formEditProfileValidator.enableValidation();

const formAddNewCardValidator = new FormValidator(obj, formImg);
formAddNewCardValidator.enableValidation();

const formAddNewAvatarValidator = new FormValidator(obj, formAvatar);
formAddNewAvatarValidator.enableValidation();
