let popup = document.querySelector('.popup');
let editBtn = document.querySelector('.profile__edit-btn');
let popupClose = document.querySelector('.popup__close');

let inputFirst = document.querySelector('.form__input_first');
let secondFirst = document.querySelector('.form__input_second');

let form = document.querySelector('.form');

let profileSubtitle = document.querySelector('.profile__subtitle');
let profileTitle = document.querySelector('.profile__title');

editBtn.addEventListener('click', visible);
popupClose.addEventListener('click', visible);

form.addEventListener('submit', addform);

function visible() {
    if (popup.classList.contains('popup_visible') === false) {
        popup.classList.add('popup_visible');
        inputFirst.value=profileSubtitle.textContent;
        secondFirst.value=profileTitle.textContent;
    } else {
        popup.classList.remove('popup_visible');
        inputFirst.value = " ";
        secondFirst.value = " ";
    }
    return popup;
}

function addform(evt) {
    profileSubtitle.textContent = inputFirst.value;
    profileTitle.textContent = secondFirst.value;
    popup.classList.remove('popup_visible');
    evt.preventDefault();
}

