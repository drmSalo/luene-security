import { NavLink, useLocation } from "react-router-dom";
import style from "./Header.module.scss";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    window.scrollTo(0, 0);
    setIsActive(!isActive);
  };

  return (
    <header className={style.header__page}>
      <nav className={style.navbar}>
        <div className={style.nav__container}>
          {isActive ? (
            <span className={style.nav__close} onClick={handleClick}>
              Schliessen
            </span>
          ) : (
            <img
              src="../img/burger-menu.png"
              alt="Burger Menu"
              className={style.nav__burger_menu}
              onClick={handleClick}
            />
          )}
        </div>
        {isActive && (
          <div className={style.nav__list}>
            <NavLink
              style={{ color: location.pathname === "/" ? "#ed6221" : "#000" }}
              className={style.nav__link}
              exact
              to={"/"}
              onClick={handleClick}
            >
              Sicherheitsdienst
            </NavLink>
            <NavLink
              style={{ color: location.pathname === "/reinigungsdienst" ? "#ed6221" : "#000" }}
              className={style.nav__link}
              to={"/reinigungsdienst"}
              onClick={handleClick}
            >
              Reinigungsdienst
            </NavLink>
            <NavLink
              style={{ color: location.pathname === "/zeitarbeit" ? "#ed6221" : "#000" }}
              className={style.nav__link}
              to={"/zeitarbeit"}
              onClick={handleClick}
            >
              Zeitarbeit
            </NavLink>
            <NavLink
              style={{ color: location.pathname === "/kontakt" ? "#ed6221" : "#000" }}
              className={style.nav__link}
              to={"/kontakt"}
              onClick={handleClick}
            >
              Kontakt
            </NavLink>
            <NavLink
              style={{ color: location.pathname === "/kontakt" ? "#ed6221" : "#000" }}
              className={style.nav__link}
              to={"/kontakt"}
              onClick={handleClick}
            >
              Standorte
            </NavLink>
          </div>
        )}
        
        <div className={style.nav__list_tablet}>
            <NavLink
              style={{ color: location.pathname === "/" ? "#ed6221" : "#000" }}
              className={style.nav__link}
              exact
              to={"/"}
              onClick={handleClick}
            >
              Sicherheitsdienst
            </NavLink>
            <NavLink
              style={{ color: location.pathname === "/reinigungsdienst" ? "#ed6221" : "#000" }}
              className={style.nav__link}
              to={"/reinigungsdienst"}
              onClick={handleClick}
            >
              Reinigungsdienst
            </NavLink>
            <NavLink
              style={{ color: location.pathname === "/zeitarbeit" ? "#ed6221" : "#000" }}
              className={style.nav__link}
              to={"/zeitarbeit"}
              onClick={handleClick}
            >
              Zeitarbeit
            </NavLink>
            <NavLink
              style={{ color: location.pathname === "/kontakt" ? "#ed6221" : "#000" }}
              className={style.nav__link}
              to={"/kontakt"}
              onClick={handleClick}
            >
              Kontakt
            </NavLink>
            <NavLink
              style={{ color: location.pathname === "/kontakt" ? "#ed6221" : "#000" }}
              className={style.nav__link}
              to={"/kontakt"}
              onClick={handleClick}
            >
              Standorte
            </NavLink>
          </div>
      </nav>
    </header>
  );
}

export default Header;
