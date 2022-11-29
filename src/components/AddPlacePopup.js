import React from "react";
import { PopupWithForm } from "./PopupWithForm";

export function AddPlacePopup({ isOpen, onClose, AddPlacePopup }) {
  var textInput = React.createRef();
  var urlInput = React.createRef();
  function handleSubmit(e) {
    e.preventDefault();
    AddPlacePopup({
      name: textInput.value,
      link: urlInput.value
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="elements"
      buttonText="Создать"
      children={
        <>
          <fieldset className="popup__fieldset">
            <input
              type="text"
              ref={(input) => { textInput = input; }}
              id="popupPlase"
              name="name"
              className="popup__input popup__input_form_plase"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popupPlase-error"></span>
          </fieldset>
          <fieldset className="popup__fieldset">
            <input
              type="url"
              ref={(input) => { urlInput = input; }}
              id="popupLink"
              name="link"
              className="popup__input popup__input_form_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popupLink-error"></span>
          </fieldset>
        </>
      }
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}
