import { Link } from "react-router-dom";
import style from "../Zeitarbeit/Zeitearbeit.module.scss";
import Telefone from "../../components/Telefone";

function Zeitarbeit() {
  return (
    <main>
      <section className={style.intro}>
        <div className={style.intro__pannel}>
          <div className={style.intro__container}>
            <img
              alt="Logo"
              className={style.intro__img}
              src="../img/logo.png"
              width="300"
            />
            <div>
              <p className={style.subtitle}>Lünesecurity Zeitarbeit Hamburg</p>
              <div className={style.subtitle__title}>
                ZUVERLÄSSIG, FLEXIBEL, PREISWERT!
              </div>
              <span className={style.subtitle_span}>
                Ihr Partner für ultimative Sicherheit
              </span>
              <div className={style.telefone__panel}>
              <Telefone/>
              </div>
            </div>
          </div>
          <div>
            <img
              alt="reinigungsfirma"
              className={style.man_pic}
              src="../img/zeitarbeit.jpeg"
            />
          </div>
        </div>
      </section>
      <section className={style.main}>
        {/* <div className={style.container}> */}
        <div className={style.main__pannel}>
          <div className={style.main__pannel_container}>
            <h2 className={style.main__pannel_title}>
              Willkommen bei Lünesecurity
            </h2>
            <p className={style.main__pannel_title}>Zeitarbeit Hamburg</p>
            <span className={style.main__pannel_text}>
              Die Lünesecurity ist ein mittelständiges Unternehmen, dass sich in
              den Bereichen
              <strong> Reinigung, Sicherheit </strong>
              und
              <strong> Qualitätsmanagement </strong>
              spezialisiert hat. Unser Team verfügt über langjährige Erfahrung
              und eine starke Teamarbeit.
              <strong>Langjährige Erfahrungen </strong>
              in den einzelnen Bereich macht die SDG zu einem
              <strong> Top Dienstleistungsunternehmen.</strong>
            </span>
          </div>
        </div>

        <div className={style.container}>
          <div className={style.description__wrap}>
            <img
              className={style.description__img}
              alt="logisticker"
              src="../img/logisticker.jpeg"
            />
            <div className={style.description__text_wrap}>
              <h1 className={style.description__title}>Zeitarbeit Hamburg</h1>
              <p className={style.description__subtitle}>
                Erfahrendes{" "}
                <span className={style.subtitle__span}>Personal </span>
                für
                <span className={style.subtitle__span}> Spannungspitzen</span>
              </p>
              <p className={style.description__list_subtitle}>
                Unsere Dienstleistungen:
              </p>
              <p className={style.description__text}>
                Wir erledigen für Sie die folgenden Arbeiten:
                <br />
                <br />
                Sortier-, Kontrollier- und Nacharbeiten
                <br />
                Messungen und Prüfungen der Produkte
                <br />
                Auffinden von Fehlteilen im Produktionsfluss
                <br />
                Komplett- und Teilbereiche Ihrer Lagerbewirtschaftung
                <br />
                Wareneingänge
                <br />
                Kommissionierungen
                <br />
                Endkontrolle
                <br />
                Verladungen
                <br />
                Produktions- und Montageaufgaben
              </p>
              <p className={style.service__text}>
                Unsere Leistungen umfassen eine Einsatzbereitschaft von 24
                Stunden in denen Ihre Aufträge korrekt, sauber und unter
                Einhaltung der Vorschriften ausgeführt werden.
              </p>
              <Link to={"/kontakt"} className={style.description__button}>
                Personal anfragen
              </Link>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </main>
  );
}
export default Zeitarbeit;
