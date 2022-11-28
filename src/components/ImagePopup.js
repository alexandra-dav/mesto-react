export function ImagePopup(props) {
  // card, onClose, {link: card.link, name: card.name}
  return (
    <div
      className={`popup popup_photo ${props.isOpen ? "popup_opened" : ""}`}
      id="view_photo"
    >
      <div className="photo">
        <button
          aria-label="close"
          className="popup__close popup__close_window_photo"
          type="button"
          onMouseDown={props.onClose}
        ></button>
        <figure className="photo__figure">
          <img
            src={props.card.link}
            className="photo__image"
            alt={`${props.card.name}`}
          />
          <figcaption className="photo__caption">{`${props.card.name}`}</figcaption>
        </figure>
      </div>
    </div>
  );
}
