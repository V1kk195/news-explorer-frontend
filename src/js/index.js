import '../css/main.css';
import {
    loginPopupTemplate,
    signupPopupTemplate,
    successPopupTemplate,
    popupContainer,
    closePopupButton,
    popup,
    closeField,
    signupButton
} from './constants/popupMarkup';

import Popup from "./components/Popup";
import NewsApi from "./api/NewsApi";

const loginButton = document.querySelector('.button-login');

const newsApi = new NewsApi({
  headers: {
    authorization: 'c6e72a1aa4164fd0b73957a7b88b309f',
    'Content-Type': 'application/json',
    keywords: '',
  }
})

const signupPopup = () => {
  new Popup(popup, popupContainer, signupPopupTemplate, closePopupButton, closeField, loginPopup).open();
}

const loginPopup = () => {
  new Popup(popup, popupContainer, loginPopupTemplate, closePopupButton, closeField, signupPopup).open();
}

loginButton.addEventListener('click', loginPopup);


//
// signupButton.addEventListener('click', () => {
//   console.log('signup clicked');
//   signupPopup.open();
// })


// const popup = document.querySelector('.popup');
//
//
// const burgerMenu = document.querySelector('.header__burger');
// const menu = document.querySelector('.menu');
// const headerContainer = document.querySelector('.header__container');
// const closeIcon = document.querySelector('.menu__close');
// const darkArea = document.querySelector('.header__dark-area');
//
// const openCloseBurgerMenu = () => {
//   menu.classList.toggle('menu_opened');
//   headerContainer.classList.toggle('header__container_menu-opened');
//   darkArea.classList.toggle('header__dark-area_opened');
//   burgerMenu.classList.toggle('header__burger_invisible');
//   if (screen.width < 767) {
//     closeIcon.classList.toggle('menu__close_visible');
//   }
// }
//
//
// document.querySelector('.button-login').addEventListener('click', () => {
//   // if (container.lastElementChild.className !== 'popup__close') {
//   //   container.removeChild(container.lastElementChild);
//   // }
//   container.insertAdjacentHTML('beforeend', loginPopupTemplate);
//   popup.classList.add('popup_is-opened');
//   openCloseBurgerMenu();
//
//   document.querySelector('.popup__signup-button').addEventListener('click', () => {
//     container.removeChild(container.lastElementChild);
//     container.insertAdjacentHTML('beforeend', signupPopupTemplate);
//     popup.classList.add('popup_is-opened');
//
//     document.querySelector('#signup-button').addEventListener('click', () => {
//       container.removeChild(container.lastElementChild);
//       container.insertAdjacentHTML('beforeend', successPopupTemplate);
//       popup.classList.add('popup_is-opened');
//     });
//
//     document.querySelector('.popup__signin-button').addEventListener('click', () => {
//       container.removeChild(container.lastElementChild);
//       container.insertAdjacentHTML('beforeend', loginPopupTemplate);
//       popup.classList.add('popup_is-opened');
//     });
//   });
// });
//
//
//
// burgerMenu.addEventListener('click', () => {
//   openCloseBurgerMenu();
//   closeIcon.addEventListener('click', openCloseBurgerMenu);
// });


