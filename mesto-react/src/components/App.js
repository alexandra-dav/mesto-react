import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import React from 'react';
import  { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
  const [isPhotoPopupOpen, setIsPhotoPopupOpen] = React.useState();
  const [selectedCard, handleCardClick] = React.useState();

  function handleEditAvatarClick() {
    const avatarPopup = document.querySelector('.popup_avatar');       
    avatarPopup.classList.add("popup_opened");
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };
  function handleEditProfileClick() {
    const profilePopup = document.querySelector('.popup_profile');       
    profilePopup.classList.add("popup_opened");
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };
  function handleAddPlaceClick() {
    const plasePopup = document.querySelector('.popup_elements');       
    plasePopup.classList.add("popup_opened");
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };
  function handleOpenPhotoClick(link) {
    console.log(link);
    const photoPopup = document.querySelector('.popup_photo');       
    photoPopup.classList.add("popup_opened");
    setIsPhotoPopupOpen(!isPhotoPopupOpen);
    handleCardClick(link);
  };
  function handleClosePopap (){
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsPhotoPopupOpen(false);
  };
  function handleClikButtunClose(evt) {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
      handleClosePopap();
    }
  };
  React.useEffect(() => {
    function handleEscClose(e) {
      if (e.key === 'Escape') {
        handleClosePopap();
      }
    }

    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  });

  return (
    <>
      <Header />
      <Main
        onCardClick={handleOpenPhotoClick}
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick}   
      />
      <Footer />
      <PopupWithForm 
        title="Вы уверены?"
        name="delete-card"
        buttonText="Да"
        isOpen={false}
      />
      <PopupWithForm 
        title="Редактировать профиль"
        name="popup_profile"
        buttonText="Сохранить"
        children={
          <>
          <fieldset className="popup__fieldset">
            <input type="text" id="popupName" name="name" className="popup__input popup__input_form_name" placeholder="Имя" value="" minLength="2" maxLength="40" required />
            <span className="popupName-error"></span>
          </fieldset>
          <fieldset className="popup__fieldset">
            <input type="text" id="popupJob" name="about" className="popup__input popup__input_form_job" placeholder="О себе" value="" minLength="2" maxLength="200" required />
            <span className="popupJob-error"></span>
          </fieldset>
          </>
        }
        isOpen={isEditProfilePopupOpen}
        onClose={handleClikButtunClose}
      />
      <PopupWithForm 
        title="Новое место"
        name="popup_elements"
        buttonText="Создать"
        children={
          <>
          <fieldset className="popup__fieldset">
            <input type="text" id="popupPlase" name="name" className="popup__input popup__input_form_plase" placeholder="Название" value="" minLength="2" maxLength="30" required />
            <span className="popupPlase-error"></span>
          </fieldset>
          <fieldset className="popup__fieldset">
            <input type="url" id="popupLink" name="link" className="popup__input popup__input_form_link" placeholder="Ссылка на картинку" value="" required />
            <span className="popupLink-error"></span>
          </fieldset>
          </>
        }
        isOpen={isAddPlacePopupOpen}
        onClose={handleClikButtunClose}
      />
      <PopupWithForm 
        title="Обновить аватар"
        name="popup_avatar"
        buttonText="Сохранить"
        children={
          <>
          <fieldset className="popup__fieldset">
            <input type="url" id="popupAvatar" name="link" className="popup__input popup__input_form_avatar" placeholder="Ссылка" value="" required />
            <span className="popupAvatar-error"></span>
          </fieldset> 
          </>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={handleClikButtunClose}
      />

      <ImagePopup
        card={selectedCard}
        isOpen={isPhotoPopupOpen}
        onClose={handleClikButtunClose}
      />
    </>
  );
}

export default App;
