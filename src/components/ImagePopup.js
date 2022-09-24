export function ImagePopup (props) { // card, onClose
  return(
    <div className={`popup popup_photo ${props.isOpen ? 'popup_opened' : ''}`} id="view_photo">
      <div className="photo">
      <button aria-label="close" className="popup__close popup__close_window_photo" type="button" onMouseDown={props.onClose}></button>
        <figure className="photo__figure">
          <img src={props.card} className="photo__image" alt="Открытое фото"/>
          <figcaption className="photo__caption"></figcaption>
        </figure>             
      </div>
    </div>
  );
}