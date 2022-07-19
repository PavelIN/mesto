(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_showInputError",(function(e,t){var n=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(o._obj.inputErrorClass),n.textContent=t,n.classList.add(o._obj.errorClass)})),t(this,"_hideInputError",(function(e){var t=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._obj.inputErrorClass),t.classList.remove(o._obj.errorClass),t.textContent=""})),t(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),t(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),t(this,"toggleButtonState",(function(){o._hasInvalidInput()?o.resetButtonSave():(o._buttonElement.classList.remove(o._obj.inactiveButtonClass),o._buttonElement.removeAttribute("disabled"))})),t(this,"resetButtonSave",(function(){o._buttonElement.setAttribute("disabled","disabled"),o._buttonElement.classList.add(o._obj.inactiveButtonClass)})),this._obj=e,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._obj.inputSelector)),this._buttonElement=this._formElement.querySelector(this._obj.submitButtonSelector)}var r,o;return r=n,(o=[{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._formElement.addEventListener("submit",(function(e){e.preventDefault()}))}},{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){var r=t.data,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._handleCardClick=o,this._cardSelector=n}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".element__image"),this._like=this._element.querySelector(".element__like-btn"),this._setEventListeners(),this._image.src=this._link,this._image.alt=this._name,this._element.querySelector(".element__text").textContent=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._image.addEventListener("click",(function(){e._handleOpenPopup()})),this._element.querySelector(".element__trash").addEventListener("click",(function(){e._handleDeleteCard()})),this._element.querySelector(".element__like-btn").addEventListener("click",(function(){e._handleLikeCard()}))}},{key:"_handleLikeCard",value:function(){this._like.classList.toggle("element__like-btn_active")}},{key:"_handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_handleOpenPopup",value:function(){this._handleCardClick(this._name,this._link)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),i={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__save",inactiveButtonClass:"form__save_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},u=(document.querySelector(".popup_item-img"),document.querySelector(".popup__img"),document.querySelector(".popup__title-img"),Array.from(document.querySelectorAll(".popup")),document.querySelector(".popup_profile"),document.querySelector(".popup_url"),document.querySelector(".profile__edit-btn")),a=(document.querySelector(".popup__close"),document.querySelector(".popup__close-img"),document.querySelector(".form__input_item_name")),c=document.querySelector(".form__input_item_job"),l=(document.querySelector(".form__input_item_target"),document.querySelector(".form__input_item_url"),document.querySelector(".form")),s=document.querySelector(".form-img"),p=(document.querySelector(".profile__subtitle"),document.querySelector(".profile__title"),document.querySelector(".profile__image-btn")),f=document.querySelector(".elements");function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".popup__close_item_img");var m=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._escapeClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_visible"),document.addEventListener("keydown",this._escapeClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_visible"),document.removeEventListener("keydown",this._escapeClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function k(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e){var t,n=e.popup,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popup.querySelector(".form"),t._inputList=t._popupForm.querySelectorAll(".form__input"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;v(j(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){v(j(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.name,r=t.job;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.profilename,this._job.textContent=e.job}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function x(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__img"),t._popupName=t._popup.querySelector(".popup__title-img"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupName.textContent=e,this._popupImage.alt=e,q(R(u.prototype),"open",this).call(this)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y),T=new O({name:".profile__subtitle",job:".profile__title"}),V=new w({popup:".popup_profile",handleFormSubmit:function(e){T.setUserInfo(e),V.close()}});V.setEventListeners(),u.addEventListener("click",(function(){var e,t,n,r=T.getUserInfo();t=(e={name:r.name,job:r.job}).name,n=e.job,a.value=t,c.value=n,N.resetValidation(),V.open()}));var F=function(e){return new o({data:e,handleCardClick:function(e,t){A.open(e,t)}},".element-template").generateCard()},D=new w({popup:".popup_url",handleFormSubmit:function(e){U.addItem(F(e)),D.close()}});D.setEventListeners(),p.addEventListener("click",(function(){z.resetValidation(),D.open()}));var A=new B(".popup_item-img");A.setEventListeners();var U=new m({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){U.addItem(F(e))}},f);U.renderItems();var N=new n(i,l);N.enableValidation();var z=new n(i,s);z.enableValidation()})();