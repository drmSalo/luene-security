import { Link } from "react-router-dom";
import style from "./Footer.module.scss";

function Footer(props) {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <h2 className={style.footer__title}>
          Wir freuen uns auf gemeinsamme Zusammenarbeit!
        </h2>
        <div className={style.footer__nav_wrap}>
          <div className={style.footer__nav_item}>
            <Link
              onClick={handleClick}
              to={"/zeitarbeit"}
              className={style.footer__title_link}
            >
              Zeitarbeit:
            </Link>
            <Link
              onClick={handleClick}
              to={"/zeitarbeit"}
              className={style.nav__link}
              href="#"
            >
              Lagermanagment
            </Link>
          </div>
          <div className={style.footer__nav_item}>
            <Link
              onClick={handleClick}
              to={"/reinigungsdienst"}
              className={style.footer__title_link}
            >
              Reinigungsdienstleistungen:
            </Link>
            <Link
              onClick={handleClick}
              to={"/reinigungsdienst"}
              className={style.footer__nav_link}
            >
              <br />
              Gebäudereinigung
            </Link>
            <Link
              onClick={handleClick}
              to={"/reinigungsdienst"}
              className={style.footer__nav_link}
            >
              <br />
              Fensterreinigung
            </Link>
            <Link
              onClick={handleClick}
              to={"/reinigungsdienst"}
              className={style.footer__nav_link}
            >
              <br />
              Grundreinigung
            </Link>
            <Link
              onClick={handleClick}
              to={"/reinigungsdienst"}
              className={style.footer__nav_link}
            >
              <br />
              Baureinigung
            </Link>
            <Link
              onClick={handleClick}
              to={"/reinigungsdienst"}
              className={style.footer__nav_link}
            >
              <br />
              Industriereinigung
            </Link>
          </div>
          <div className={style.footer__nav_item}>
            <Link
              onClick={handleClick}
              to={"/"}
              className={style.footer__title_link}
            >
              <br />
              Sicherheitsdienstleistungen:
            </Link>
            <Link
              onClick={handleClick}
              to={"/"}
              className={style.footer__nav_link}
            >
              <br />
              Brandwache
            </Link>
            <Link
              onClick={handleClick}
              to={"/"}
              className={style.footer__nav_link}
            >
              <br />
              Detektei
            </Link>
            <Link
              onClick={handleClick}
              to={"/"}
              className={style.footer__nav_link}
            >
              <br />
              Baustellensicherheit
            </Link>
            <Link
              onClick={handleClick}
              to={"/"}
              className={style.footer__nav_link}
            >
              <br />
              Veranstaltungsschutz
            </Link>
            <Link
              onClick={handleClick}
              to={"/"}
              className={style.footer__nav_link}
            >
              <br />
              Parkplatzeinweisung & Bewachung
            </Link>
            <Link
              onClick={handleClick}
              to={"/"}
              className={style.footer__nav_link}
            >
              <br />
              Pförtnerdienst
            </Link>
            <Link
              onClick={handleClick}
              to={"/"}
              className={style.footer__nav_link}
            >
              <br />
              Empfangsdienst
            </Link>
            <Link
              onClick={handleClick}
              to={"/"}
              className={style.footer__nav_link}
            >
              <br />
              Wach und Objektschutz
            </Link>
          </div>
          <div className={style.footer__nav_item}>
            Kontakt:
            <span className={style.nav__link}>
              Artlenburger Landstraße 15 <br />
              21339 Lüneburg
            </span>
          </div>
        </div>
        <Link
          onClick={handleClick}
          className={style.footer__link}
          to={"/kontakt"}
        >
          Kontakt
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
