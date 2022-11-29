import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { PopupWithForm } from "./PopupWithForm";
import { ImagePopup } from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import { EditProfilePopup } from "./EditProfilePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";
import { AddPlacePopup } from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isPhotoPopupOpen, setIsPhotoPopupOpen] = React.useState(false);
  const [selectedCard, handleCardClick] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handleOpenPhotoClick(data) {
    setIsPhotoPopupOpen(!isPhotoPopupOpen);
    handleCardClick({ link: data.link, name: data.name });
  }
  function handleClosePopap() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsPhotoPopupOpen(false);
  }
  function handleClikButtunClose(evt) {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__close")
    ) {
      handleClosePopap();
    }
  }

  // Получаем данные о пользователе
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) =>
        console.log("Ошибка: ", err, " код ошибки: ", err.status)
      );
  }, []);

  // закрыть попапы
  React.useEffect(() => {
    function handleEscClose(e) {
      if (e.key === "Escape") {
        handleClosePopap();
      }
    }

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  });

  // данные о карточках
  const [card, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch((err) =>
        console.log("Ошибка: ", err, " код ошибки: ", err.status)
      );
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) =>
        console.log("Ошибка: ", err, " код ошибки: ", err.status)
      );
  }
  function handleCardDelete(card) {
    api
    .deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    })
    .catch((err) =>
        console.log("Ошибка: ", err, " код ошибки: ", err.status)
      );
  }
  function handleUpdateUser(newDataProfile){
    api
    .patchUserInfo(newDataProfile)
    .then((newProfile)=> {
      setCurrentUser(newProfile);
      handleClosePopap();
    })
    .catch((err) =>console.log("Ошибка: ", err, " код ошибки: ", err.status)
    );
  }
  function handleUpdateAvatar(newLinkAvatar){
    api
    .patchUserAvatar(newLinkAvatar)
    .then((newProfile)=> {
      setCurrentUser(newProfile);
      handleClosePopap();
    })
    .catch((err) =>console.log("Ошибка: ", err, " код ошибки: ", err.status)
    );
  }
  function handleAddPlaceSubmit(newPlaceCard){
    api
      .postCard(newPlaceCard)
      .then((newCard)=> {
        console.log(newCard);
        setCards([newCard, ...card]);
        handleClosePopap();
      })
      .catch((err) =>console.log("Ошибка: ", err, " код ошибки: ", err.status)
      );

  }

  return (
    <>
      <Header />

      <Main
        card={card}
        you={currentUser._id}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        onCardClick={handleOpenPhotoClick}
        name={currentUser.name}
        about={currentUser.about}
        avatar={currentUser.avatar}
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

      <CurrentUserContext.Provider value={currentUser}>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={handleClikButtunClose}
          onUpdateUser={handleUpdateUser}
        />
      </CurrentUserContext.Provider>

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={handleClikButtunClose}
        AddPlacePopup={handleAddPlaceSubmit}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={handleClikButtunClose}
        onUpdateAvatar={handleUpdateAvatar}
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
