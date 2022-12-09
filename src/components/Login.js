import React from "react";

export function Login() {
  return (
    <div className="log-in">
      <h2 className="log-in__title">Вход</h2>
      <form
        name="login-form"
        className="log-in__form"
        /* onSubmit={props.onSubmit} */
      >
        <fieldset className="log-in__fieldset">
            <input
              type="text"
              id="loginEmail"
              name="email"
              className="log-in__input log-in__input_form_email"
              placeholder="Email"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popupName-error"></span>
          </fieldset>
          <fieldset className="log-in__fieldset">
            <input
              type="text"
              id="loginPass"
              name="pass"
              className="log-in__input log-in__input_form_pass"
              placeholder="Пароль"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popupJob-error"></span>
          </fieldset>

        <button aria-label="submit" className="log-in__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
