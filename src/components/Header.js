import logo from "../images/logo.svg";
import { Route, Switch, Link } from "react-router-dom";

export function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <Switch>
      <Route path="/sing-up">
          <div className="header__info">
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          </div>
        </Route>
        <Route path="/sing-in">
          <div className="header__info">
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          </div>
        </Route>
        <Route path="/">
          <div className="header__info">
            <p className="header__email">email</p>
            <Link to="/sign-in" className="header__link" onClick={props.onLogOut}>
              Выйти
            </Link>
          </div>
        </Route>
      </Switch>
    </header>
  );
}
