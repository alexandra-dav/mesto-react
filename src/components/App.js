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
  const [selectedCard, handleCardClick] = React.useState({});
  

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };
  function handleOpenPhotoClick(data) {
    setIsPhotoPopupOpen(!isPhotoPopupOpen);
    handleCardClick({link: data.link, name: data.name});
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
            <input type="text" id="popupName" name="name" className="popup__input popup__input_form_name" placeholder="Имя" minLength="2" maxLength="40" required defaultValue="Имя" />
            <span className="popupName-error"></span>
          </fieldset>
          <fieldset className="popup__fieldset">
            <input type="text" id="popupJob" name="about" className="popup__input popup__input_form_job" placeholder="О себе" minLength="2" maxLength="200" required defaultValue="О себе" />
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
            <input type="text" id="popupPlase" name="name" className="popup__input popup__input_form_plase" placeholder="Название"  minLength="2" maxLength="30" required defaultValue="Название" />
            <span className="popupPlase-error"></span>
          </fieldset>
          <fieldset className="popup__fieldset">
            <input type="url" id="popupLink" name="link" className="popup__input popup__input_form_link" placeholder="Ссылка на картинку"  required defaultValue="Ссылка на картинку" />
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
            <input type="url" id="popupAvatar" name="link" className="popup__input popup__input_form_avatar" placeholder="Ссылка" required defaultValue="" />
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
