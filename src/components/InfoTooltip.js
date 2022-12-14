import success from '../images/success.jpg';
import failure from '../images/failure.jpg'

export function InfoTooltip({ isOpen, onClose, isLogInSuccess}) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__content">
        <button
          aria-label="close"
          className="popup__close"
          type="button"
          onMouseDown={onClose}
        ></button>
        <img className='popup__tooltip-img' src={isLogInSuccess ? success : failure} alt="Иконка статуса авторизации"></img>
        <h2 className="popup__tooltip-title">
            {isLogInSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </div>
    </div>
  );
}
