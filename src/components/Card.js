export function Card({
  key,
  card,
  userData,
  onCardDelete,
  onCardClick,
  onCardLike
}) {
  const ownerCard = card.owner;
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = ownerCard._id === userData;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === userData);
  
  return (
    <article className="elements__container" key={key}>
      <img
        className="elements__image"
        src={card.link}
        alt={card.name}
        onClick={onCardClick}
      />
      <div className="elements__info">
        <h2 className="elements__name">{`${card.name}`}</h2>
        <div className="elements__like">
          <button
            aria-label="like"
            name="favorit"
            id="favorit"
            className={`elements__favorit ${isLiked ? "elements__favorit_active" : ""}`}
            type="button"
            onClick={onCardLike}
          ></button>
          <p className="elements__like-count">{card.likes.length}</p>
        </div>
      </div>
      <button
        aria-label="delete"
        name="button-del"
        id="button-del"
        className={`elements__delete ${isOwn ? "" : "elements__delete_hidden"}`}
        type="button"
        onClick={onCardDelete}
      ></button>
    </article>
  );
}
