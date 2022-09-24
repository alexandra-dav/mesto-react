export function Card(props) {
  return(
    <article className="elements__container">
      <img className="elements__image" src={props.link} alt={props.name} onClick={props.onCardImgClick} />
      <div className="elements__info">
        <h2 className="elements__name">{`${props.name}`}</h2>
        <div className="elements__like">
          <button aria-label="like" name="favorit" id="favorit" className="elements__favorit" type="button"></button>
          <p className="elements__like-count">{props.likes.length}</p>
        </div>
      </div>
      <button aria-label="delete" name="button-del" id="button-del" className="elements__delete" type="button"></button>
    </article>
  );
}