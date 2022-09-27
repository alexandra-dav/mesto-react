/* Извне должны будут передаваться только текст заголовка 
и идентификатор формы (в виде строк) 
Последнее, что нужно сделать, — добавить в компонент PopupWithForm пропc isOpen, 
на основе которого в JSX будет задаваться CSS-класс, отвечающий за видимость попапа.
*/

export function PopupWithForm(props) { // props -> name, title, isOpen
  const modififkator = props.isOpen ? `popup popup_${props.name} popup_opened` : `popup popup_${props.name}`;
  return(
    <div className={modififkator} id={`${props.name}`}>
      <div className="popup__content">
          <button aria-label="close" className="popup__close" type="button" onMouseDown={props.onClose}></button>
          <h2 className="popup__title">{`${props.title}`}</h2>
          <form name={`${props.name}`} className="popup__form">
              {props.children}            
              <button aria-label="submit" className="popup__button" type="submit">{`${props.buttonText}`}</button>
          </form>         
      </div>
    </div>
  );
};