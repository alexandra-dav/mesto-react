import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <h2 className="register__title">Регистрация</h2>
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
          <span className="registerEmail-error"></span>
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
          <span className="registerName-error"></span>
        </fieldset>

        <button aria-label="submit" className="register__button" type="submit">
          Зарегистрироваться
        </button>
        <div>
            <p className="register__link">
                Уже зарегистрированы? <Link to="/sing-in" className="register__link register__rout-link">
             Войти
          </Link>
            </p>
          
        </div>
      </form>
    </div>
  );
}
export default Register;