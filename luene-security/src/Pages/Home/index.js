import Telefone from "../../components/Telefone";
import style from "./Home.module.scss";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <main>
      <section className={style.intro}>
        <div className={style.intro__pannel}>
          <div className={style.intro__container}>
            <img
              alt="Logo"
              className={style.intro__img}
              src="../img/logo.png"
              width={300}
            />
            <p className={style.subtitle}>
              Lünesecurity Gebäudereinigung Hamburg
            </p>
            <div className={style.subtitle__title}>
              ZUVERLÄSSIG, FLEXIBEL, PREISWERT!
            </div>
            <span className={style.subtitle_span}>
              Ihr Partner für gewerbliche Reinigungen
            </span>
            <div className={style.telefone__panel}>
              <Telefone/>
            </div>
          </div>
          <div>
            <img
              alt="reinigungsfirma"
              className={style.woman_pic}
              src="../img/reinigungsfirma.jpeg"
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
            <p className={style.main__pannel_title}>Gebäudereinigung Hamburg</p>
            <span className={style.main__pannel_text}>
              Auf der Suche nach einem
              <strong> professionellen und erfahrenen Reinigungsdienst</strong>
              <strong> Kompetenz, Professionalität, Zuverlässigkeit </strong>
              und ein
              <strong> glasklares Ergebnis</strong>
            </span>
            <p className={style.main__pannel_text}>
              Ob in Ihrem
              <strong> Bürogebäude</strong>, Ihrer
              <strong> Praxis </strong>
              oder in der
              <strong> Industrie </strong>–<strong>Sauberkeit </strong>
              ist ein ausschlaggebender
              <strong> Wohlfühlfaktor </strong>
              am Arbeitsplatz und sichert
              <strong> reibungslose Produktionsabläufe</strong>. Wir schaffen
              eine Atmosphäre, die zum
              <strong> Wohlfühlen </strong>
              einlädt und
              <strong> einen guten Eindruck </strong>
              auf Gäste und Besucher macht.
            </p>
          </div>
        </div>

        <div className={style.container}>
          <div className={style.description__wrap}>
            <img
              className={style.description__img}
              alt="gebaeudereinigung-hamburg"
              src="../img/gebaeudereinigung-hamburg.jpeg"
            />
            <div className={style.description__text_wrap}>
              <h1 className={style.description__title}>
                Gebäudereinigung Hamburg
              </h1>
              <p className={style.description__subtitle}>
                Sauberes <span className={style.subtitle__span}>Gebäude </span>
                innen und außen!
              </p>
              <p className={style.description__text}>
                Ob innen oder außen, wir machen ihr Gebäude zum
                <strong> Wohlfühlort</strong> für
                <strong> Mitarbeiter</strong> und Besucher. Ob
                <strong> Praxen</strong>, <strong> Kanzleien</strong>,
                <strong> Wohngenossenschaften </strong>
                oder ihr <strong>Bürogebäude</strong> – wir sorgen für
                <strong> saubere Treppenhäuser</strong>,
                <strong> Außenfassaden</strong> oder <strong>Räume</strong>, die
                für sie durch eine <strong>fachgerechte </strong>
                Reinigung lange erhalten bleiben!
              </p>

              <Link to={"/kontakt"} className={style.description__button}>
                Gebäudereinigung anfragen
              </Link>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
      <section className={style.service__description}>
        <div className={style.fensterreinigung__bg}>
          <div className={style.description__container}>
            <div className={style.container}>
              <div className={style.description__wrap}>
              <div className={style.rotated__item}>
                <img
                  alt="fensterreinigung"
                  src="../img/fensterreinigung-hamburg.jpeg"
                  className={style.description__img}
                />
                <div className={style.description__text_wrap}>
                  
                  <h1 className={style.description__title}>
                    Fensterreinigung Hamburg
                  </h1>
                  <p className={style.description__subtitle}>
                    Sauberes{" "}
                    <span className={style.subtitle__span}>Fenster </span>
                    und Glasflächen!
                  </p>
                  <p className={style.description__text}>
                    Wir sind ihr{" "}
                    <strong>professioneller Ansprechpartner</strong> für
                    <strong> Fenster- und Glasreinigung.</strong> Ob,
                    <strong> Fenster</strong>, <strong>Vitrinen</strong> oder
                    <strong> Glastische</strong>, wir machen auf Wunsch alles
                    wieder
                    <strong> glasklar</strong>. Selbstverständlich{" "}
                    <strong>streifenfrei</strong> und ohne{" "}
                    <strong>Schleier</strong> und <strong>Schlieren</strong>.
                  </p>
                  <Link to={"/kontakt"} className={style.description__button}>
                    Fensterreinigung anfragen
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.grundreinigung__bg}>
          <div className={style.description__container}>
            <div className={style.container}>
              <div className={style.description__wrap}>
                <img
                  alt="grundreinigung"
                  src="../img/grundreinigung-hamburg.jpeg"
                  className={style.description__img}
                />
                <div className={style.description__text_wrap}>
                  <h1 className={style.description__title}>
                    Grundreinigung Hamburg
                  </h1>
                  <p className={style.description__subtitle}>
                    Saubere{" "}
                    <span className={style.subtitle__span}>Grundflächen </span>
                    oben und unten!
                  </p>
                  <p className={style.description__text}>
                    <strong>Intensiv und gründlich </strong>– wir beseitigen
                    auch
                    <strong> hartnäckige Verschmutzungen </strong>an schwierigen
                    Stellen und befreien Ihre
                    <strong> Böden </strong>und
                    <strong> Oberflächen</strong>
                    von Schmutz. Durch unsere
                    <strong> langjährige Erfahrung </strong>
                    und unser unschlagbares
                    <strong> Fachwissen </strong>
                    ist uns keine Herausforderung zu groß!
                  </p>
                  <Link to={"/kontakt"} className={style.description__button}>
                    Grundreinigung anfragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.baureinigung__bg}>
          <div className={style.description__container}>
            <div className={style.container}>
              <div className={style.description__wrap}>
              <div className={style.rotated__item}>
                <img
                  alt="baureinigung"
                  src="../img/baureinigung-hamburg.jpeg"
                  className={style.description__img}
                />
                <div className={style.description__text_wrap}>
                  <h1 className={style.description__title}>
                    Baureinigung Hamburg
                  </h1>
                  <p className={style.description__subtitle}>
                    Saubere und schlüsselfertige
                    <span className={style.subtitle__span}> Bauobjekte</span>!
                  </p>
                  <p className={style.description__text}>
                    Wo gemauert, gebohrt und gespachtelt wird, entsteht grober
                    Schmutz.
                    <strong> Bauschutt, Verpackungsmüll </strong>und andere
                    <strong> Verunreinigungen </strong>
                    gehören zu jeder Baustelle. Daher ist in diesem Fall eine
                    <strong> gründliche </strong>
                    und
                    <strong> intensive Baureinigung </strong>
                    unerlässlich, um während des Baus eine
                    <strong> korrekte Ausführung </strong>
                    zu gewährleisten und im Nachgang eine
                    <strong> saubere Baustelle </strong>
                    vorzufinden.
                  </p>
                  <Link to={"/kontakt"} className={style.description__button}>
                    Baureinigung anfragen
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.industriereinigung__bg}>
          <div className={style.description__container}>
            <div className={style.container}>
            <div className={style.description__wrap}>
            
              <img
                alt="industriereinigung"
                src="../img/industriereinigung-hamburg.jpeg"
                className={style.description__img}
              />
              <div className={style.description__text_wrap}>
              <h1 className={style.description__title}>
                Industriereinigung Hamburg
              </h1>
              <p className={style.description__subtitle}>
                Sterile Industrieflächen und
                <span className={style.subtitle__span}> Maschinen </span>
                innen und außen!
              </p>
              <p className={style.description__text}>
                Eine
                <strong> regelmäßige Reinigung </strong>von
                <strong> Anlagen </strong>und
                <strong> Maschinen </strong>
                ist wichtig, um den
                <strong> reibungslosen Produktionsablauf </strong>
                und die
                <strong> Qualität </strong>
                weiterhin zu
                <strong> gewährleisten. </strong>
                Wir verfügen über die
                <strong> nötige Expertise </strong>
                und das passende
                <strong> Reinigungswerkzeug, </strong>
                um
                <strong>
                  {" "}
                  Kesselhäuser, Kohlebunker, Rauchgaskanäle, E-Filteranlagen{" "}
                </strong>
                oder
                <strong> Krananlagen fachgerecht zu reinigen. </strong>
              </p>
              <Link to={"/kontakt"} className={style.description__button}>
                Industriereinigung anfragen
              </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.garanty}>
        <div className={style.container}>
          <p className={style.garanty__title}>
            AUF DER SUCHE NACH EINER KOMPETENTEN REINIGUNGSFIRMA?
          </p>
          <Link className={style.garanty__button} to={"/kontakt"}>
            SONDERREINIGUNG ANFRAGEN
          </Link>
          <div className={style.garanty__description_wrap}>
            <div className={style.garanty__description_item}>
              <span className={style.garanty__num}>100%</span>
            </div>

            <div>
              <p className={style.garanty__item_title}>Professionalität</p>
              <span className={style.garanty__item_subtitle}>
                Wir zeichnen uns durch ein zielgerichtetes, fundiertes und
                fachgerechtes Handeln auch bei schwierigen Herausforderungen
                aus, denn Professionalität steht bei uns an erster Stelle! Nicht
                nur die Ausführung unserer Arbeit, sondern auch unsere
                Kommunikation ist davon geprägt.{" "}
              </span>
            </div>

            <div className={style.garanty__description_item}>
              <span className={style.garanty__num}>100%</span>
            </div>

            <div>
              <p className={style.garanty__item_title}>Kompetenz</p>
              <span className={style.garanty__item_subtitle}>
                Unsere Sicherheits- und Reinigungsdienstleistungen werden von
                uns stets fachgerecht und mit viel Liebe zum Detail von unseren
                motivierten Mitarbeitern durchgeführt. Eine fachkompetente und
                sorgfältige Ausführung ist bei uns essenziell, egal welche
                Expertise Sie bei uns in Anspruch nehmen.{" "}
              </span>
            </div>

            <div className={style.garanty__description_item}>
              <span className={style.garanty__num}>100%</span>
            </div>

            <div>
              <p className={style.garanty__item_title}>Zuverlässigkeit</p>
              <span className={style.garanty__item_subtitle}>
                Uns ist es wichtig, dass Sie sich zu 100% auf uns verlassen
                können, deswegen führen wir unsere Aufgaben stets mit hohem
                Verantwortungsbewusstsein aus, stehen zu unserem Wort und führen
                die Arbeiten dann aus, wenn sie uns wirklich brauchen!{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
