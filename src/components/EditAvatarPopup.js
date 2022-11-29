import React from "react";
import { PopupWithForm } from "./PopupWithForm";

export function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  var urlInput = React.createRef();
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: urlInput.value,
    });
  }
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      buttonText="Сохранить"
      children={
        <>
          <fieldset className="popup__fieldset">
            <input
              type="url"
              ref={(input) => { urlInput = input; }}
              id="popupAvatar"
              name="link"
              className="popup__input popup__input_form_avatar"
              placeholder="Ссылка"
              required
              defaultValue=""
            />
            <span className="popupAvatar-error"></span>
          </fieldset>
        </>
      }
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}
