import logo from '../images/logo.svg'
export function Header () {
    return (
      <header class="header">
        <img src={logo} alt="Логотип" class="header__logo" />
      </header>
    );
  }