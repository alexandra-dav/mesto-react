import React from 'react';
import { api } from "../utils/Api";
import { Card } from './Card';


export function Main (props) {
  const [userName, setUserName] = React.useState({});
  const [userDescription, setUserDescription] = React.useState({});
  const [userAvatar, setUserAvatar] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch(err => console.log('Ошибка: ', err, ' код ошибки: ', err.status));
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch(err => console.log('Ошибка: ', err, ' код ошибки: ', err.status));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar">
          <button aria-label="edit-avatar" className="profile__edit-avatar" type="button" onClick={props.onEditAvatar}></button>
          <img className="profile__image" src={`${userAvatar}`} alt="Аватар пользователя" />
        </div>
          <form className="profile__info" name="profileInfo">
            <h1 className="profile__name">{`${userName}`}</h1>
            <button aria-label="edit-profile" className="profile__edit-name" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__occupation">{`${userDescription}`}</p>
          </form>
          <button aria-label="add-content" className="profile__add" type="button" onClick={props.onAddPlace}></button>
       </section>
      <section className="elements" aria-label="Галлерея" id="elements">
        {
          cards.map((card) =>
            <Card
              key={card._id}
              likes={card.likes}
              name={card.name}
              link={card.link}
              onCardImgClick={() => {
                props.onCardClick(card);
              }}
            />
          )
        }
      </section>
    </main>
  );
};