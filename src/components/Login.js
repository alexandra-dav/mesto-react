import React from "react";

export function Login() {
  return (
    <div className="register">
      <h2 className="register__title">Вход</h2>
      <form
        name="login-form"
        className="register__form"
        /* onSubmit={props.onSubmit} */
      >
        <fieldset className="register__fieldset">
            <input
              type="text"
              id="loginEmail"
              name="email"
              className="register__input register__input_form_email"
              placeholder="Email"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="loginEmail-error"></span>
          </fieldset>
          <fieldset className="register__fieldset">
            <input
              type="text"
              id="loginPass"
              name="pass"
              className="register__input register__input_form_pass"
              placeholder="Пароль"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="loginName-error"></span>
          </fieldset>

        <button aria-label="submit" className="register__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
