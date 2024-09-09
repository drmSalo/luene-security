import { Link } from "react-router-dom";
import style from "../Sicherheitsdienst/Sicherheitsdienst.module.scss";
import Telefone from "../../components/Telefone";

function Sicherheitsdienst() {
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
              <p className={style.subtitle}>
                Lünesecurity Sicherheitsdienst Hamburg
              </p>
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
              src="../img/security-services-014.jpeg"
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
            <p className={style.main__pannel_title}>
              SICHERHEITSDIENST Hamburg
            </p>
            <span className={style.main__pannel_text}>
              Suchen Sie einen
              <strong> professionellen Sicherheitsdienst </strong> in Hamburg?
              Wir bieten
              <strong> Kompetenz, Professionalität, Zuverlässigkeit </strong>
              und
              <strong> verantwortungsvolle Durchführung. </strong>
              Schützen Sie Ihr
              <strong> Gebäude, </strong>
              Ihren
              <strong> Parkplatz, </strong>
              Ihre
              <strong> Veranstaltung </strong>
              oder Ihre
              <strong> Baustelle </strong>
              vor
              <strong> Diebstahl, Vandalismus </strong>
              und
              <strong> Missbrauch </strong>
              mit unseren
              <strong> erfahrenen Sicherheitskonzepten.</strong>
            </span>
          </div>
        </div>

        <div className={style.container}>
          <div className={style.description__wrap}>
            <img
              className={style.description__img}
              alt="brandwache-hamburg"
              src="../img/brandwache-hamburg.jpeg"
            />
            <div className={style.description__text_wrap}>
              <h1 className={style.description__title}>BRANDWACHE HAMBURG</h1>
              <p className={style.description__subtitle}>
                Wenn es <span className={style.subtitle__span}>Drauf </span>
                ankommt!
              </p>
              <p className={style.description__text}>
                Wir stehen Ihnen als
                <strong> erfahrene </strong> und
                <strong> verantwortungsbewusste Brandwache </strong>
                zur Seite. Wir beseitigen nicht nur mögliche
                <strong> Gefahrenquellen</strong>, wie
                <strong> leicht brennbare Materialien</strong>, sondern
                <strong> kontrollieren </strong>
                auch die <strong>Löscheinrichtung </strong>
                und die Einhaltung nötiger
                <strong> Brandschutzmaßnahmen. </strong>
                Dazu zählen auch die
                <strong> Überwachung </strong> von{" "}
                <strong>Feuer - und Heißarbeiten, </strong>
                wie z.B. Schweißen und die
                <strong> Überprüfung </strong>
                von
                <strong> Flucht- und Rettungswegen.</strong>
              </p>

              <Link to={"/kontakt"} className={style.description__button}>
                Brandwache anfragen
              </Link>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
      <section className={style.service__description}>
        <div className={style.detektei__bg}>
          <div className={style.description__container}>
            <div className={style.container}>
              <div className={style.description__wrap}>
                <div className={style.rotated__item}>
                  <img
                    alt="detektei-hamburg"
                    src="../img/detektei-hamburg.jpeg"
                    className={style.description__img}
                  />
                  <div className={style.description__text_wrap}>
                    <h1 className={style.description__title}>
                      Detektei Hamburg
                    </h1>
                    <p className={style.description__subtitle}>
                      Detektivdienste für
                      <span className={style.subtitle__span}> Private </span>
                      und
                      <span className={style.subtitle__span}>
                        {" "}
                        geschäftliche{" "}
                      </span>
                      Anliegen
                    </p>
                    <p className={style.description__text}>
                      Wir
                      <strong> ermitteln </strong> für für Sie und finden
                      <strong> Beweise – sorgfältig </strong> und
                      <strong> diskret.</strong> Ob<strong> privat </strong>
                      oder für
                      <strong> Unternehmen</strong>, wir beschäftigen hoch
                      <strong> qualifizierte Detektive </strong>
                      in Bereichen wie
                      <strong>
                        {" "}
                        betrügerische Krankmeldung, Betriebsspionage,
                        Arbeitszeitbetrug{" "}
                      </strong>{" "}
                      oder
                      <strong> Sorgerecht </strong> und{" "}
                      <strong> Ehebruch. </strong>
                      Mit uns bekommen sie Fragen auf ihre
                      <strong> Antworten </strong>
                      und
                      <strong> Klarheit</strong>
                      für Ihre nächsten Schritte.
                    </p>
                    <Link to={"/kontakt"} className={style.description__button}>
                      DETEKTEI ANFRAGEN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.baustellensicherheit__bg}>
          <div className={style.description__container}>
            <div className={style.container}>
              <div className={style.description__wrap}>
                <img
                  alt="BAUSTELLENSICHERHEIT HAMBURG"
                  src="../img/baustellensicherheit-hamburg.jpg"
                  className={style.description__img}
                />
                <div className={style.description__text_wrap}>
                  <h1 className={style.description__title}>
                    Baustellensicherheit Hamburg
                  </h1>
                  <p className={style.description__subtitle}>
                    Weder
                    <span className={style.subtitle__span}> Diebe </span>
                    noch
                    <span className={style.subtitle__span}> Vandalen! </span>
                  </p>
                  <p className={style.description__text}>
                    Von
                    <strong> kostspieligen Kupfer </strong>
                    bis hin zu
                    <strong> teuren Maschinen </strong>– auf Baustellen entsteht
                    Schaden durch
                    <strong> Diebstahl </strong>und
                    <strong> Vandalismus </strong>
                    jährlich in Millionenhöhe. Daher ist es essenziell, die
                    Baustelle flächendeckend zu
                    <strong> überwachen </strong>
                    und den Baufortschritt
                    <strong> abzusichern. </strong>
                  </p>
                  <Link to={"/kontakt"} className={style.description__button}>
                    BAUSTELLENSICHERHEIT ANFRAGEN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.veranstaltungsschutz__bg}>
          <div className={style.description__container}>
            <div className={style.container}>
              <div className={style.description__wrap}>
                <div className={style.rotated__item}>
                  <img
                    alt="veranstaltungsschutz"
                    src="../img/veranstaltungssicherheit-hamburg.jpeg"
                    className={style.description__img}
                  />
                  <div className={style.description__text_wrap}>
                    <h1 className={style.description__title}>
                      Veranstaltungsschutz Hamburg
                    </h1>
                    <p className={style.description__subtitle}>
                      Sicher
                      <span className={style.subtitle__span}> Events </span>
                      und
                      <span className={style.subtitle__span}>
                        {" "}
                        Veranstaltungen!
                      </span>
                    </p>
                    <p className={style.description__text}>
                      <strong> Wir lieben sie alle: Events </strong>
                      und
                      <strong>
                        {" "}
                        Veranstaltungen. Gastronomie, Künstler, Sanitäranlagen
                      </strong>
                      und natürlich die
                      <strong> Sicherheit </strong>
                      müssen organisiert werden, deswegen haben wir es uns zur
                      Aufgabe gemacht, einen
                      <strong> reibungslosen </strong>
                      und sicheren Ablauf zu
                      <strong> gewährleisten. </strong>
                      Wir bieten Ihnen einen umfassenden
                      <strong> Veranstaltungsschutz </strong>
                      bereits ab der Planung des Events, gestützt und gesichert
                      durch
                      <strong> langjährige Erfahrungswerte </strong>
                      und eine
                      <strong> professionelle </strong>
                      und
                      <strong> zuverlässige Ausführung.</strong>
                    </p>
                    <Link to={"/kontakt"} className={style.description__button}>
                      VERANSTALTUNGSSCHUTZ ANFRAGEN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.parkplatzzuweisung__bg}>
          <div className={style.description__container}>
            <div className={style.container}>
              <div className={style.description__wrap}>
                <img
                  alt="parkplatz-reinigung"
                  src="../img/security-services-013.jpeg"
                  className={style.description__img}
                />
                <div className={style.description__text_wrap}>
                  <h1 className={style.description__title}>
                    PARKPLATZZUWEISUNG UND BEWACHUNG HAMBURG
                  </h1>
                  <p className={style.description__subtitle}>
                    Ordnung auf Ihrem
                    <span className={style.subtitle__span}> Maschinen </span>
                    Parkplatz!
                  </p>
                  <p className={style.description__text}>
                    Sie besitzen kostenpflichtige Privatparkplätze für Ihre
                    Kunden? Schützen Sie Ihre Parkplätze vor missbräuchlicher
                    Nutzung. Wir kümmern uns um das Parkmanagement und die
                    Überwachung für Hotels, Supermärkte, Arztpraxen, Wohnanlagen
                    und Restaurants. Wir reduzieren die Anzahl an Falschparkern
                    und kümmern uns um Parkplatz-Nutzer, die Ihre Fahrzeuge über
                    die erlaubte Parkdauer hinaus parken. Ihr Parkplatz, ihre
                    Regeln!
                  </p>
                  <Link to={"/kontakt"} className={style.description__button}>
                    PARKPLATZZUWEISUNG ANFRAGEN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.pfoertnerdienst__bg}>
          <div className={style.description__container}>
            <div className={style.container}>
              <div className={style.description__wrap}>
                <div className={style.rotated__item}>
                  <img
                    alt="parkplatz-reinigung"
                    src="../img/security-services-013.jpeg"
                    className={style.description__img}
                  />
                  <div className={style.description__text_wrap}>
                    <h1 className={style.description__title}>
                      PFÖRTNERDIENST HAMBURG
                    </h1>
                    <p className={style.description__subtitle}>
                      Nur mit gültigem
                      <span className={style.subtitle__span}> Ausweis! </span>
                    </p>
                    <p className={style.description__text}>
                      Ihr Eingangsbereich ist nicht nur die Visitenkarten des
                      Unternehmens, sondern schon der erste Sicherheitsbereich.
                      Wir kümmern uns um die Überwachung der ein- und
                      ausgehenden Personen oder des Warenverkehrs. Wir
                      kontrollieren das Areal durch Türen- bzw.
                      Schrankenöffnung.
                    </p>
                    <Link to={"/kontakt"} className={style.description__button}>
                      PFÖRTNERDIENSTE ANFRAGEN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.empfangsdienst__bg}>
          <div className={style.description__container}>
            <div className={style.container}>
              <div className={style.description__wrap}>
                <img
                  alt="empfangsdienst-hamburg"
                  src="../img/empfangsdienst-hamburg.jpeg"
                  className={style.description__img}
                />
                <div className={style.description__text_wrap}>
                  <h1 className={style.description__title}>
                    EMPFANGSDIENST HAMBURG
                  </h1>
                  <p className={style.description__subtitle}>
                    Der erste
                    <span className={style.subtitle__span}> Eindruck </span>
                    zählt!
                  </p>
                  <p className={style.description__text}>
                    Ein positiver Eindruck von Anfang an! Der Empfang ist der
                    erste Kontakt mit Ihrem Unternehmen und ausschlaggebend für
                    Ihr Image. Wir empfangen für Sie Besucher und Mieter und
                    heißen Sie herzlich willkommen. Ob im Gewerbe oder in
                    Büroimmobilien, unsere Mitarbeiter kümmern sich um Ihre
                    Gäste und Kunden.
                  </p>
                  <Link to={"/kontakt"} className={style.description__button}>
                    EMPFANGSDIENSTE ANFRAGEN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.objektschutz__bg}>
          <div className={style.description__container}>
            <div className={style.container}>
              <div className={style.description__wrap}>
                <div className={style.rotated__item}>
                  <img
                    alt="parkplatz-reinigung"
                    src="../img/security-services-013.jpeg"
                    className={style.description__img}
                  />
                  <div className={style.description__text_wrap}>
                    <h1 className={style.description__title}>
                      WACH - UND OBJEKTSCHUTZ HAMBURG
                    </h1>
                    <p className={style.description__subtitle}>
                      Wir
                      <span className={style.subtitle__span}> Schützen </span>
                      Ihre Immobilien!
                    </p>
                    <p className={style.description__text}>
                      Überlassen Sie den Schutz Ihres Gewerbes oder Bürogebäudes
                      lieber Spezialisten, als dem Zufall! Wir erstellen ein
                      Sicherheitskonzept, damit Ihr Unternehmen, Ihr
                      Betriebsgelände, Ihre Kunden, Mitarbeiter und Besucher
                      oder Ihre Betriebsgeheimnisse, Güter und Werte vor Schäden
                      und Gefahren zuverlässig geschützt sind. Ob Juweliere,
                      Hotels, Flughäfen, Justizeinrichtungen und Kommunen –
                      vertrauen Sie auf unsere bereits langjährig umfassende
                      Erfahrung.
                    </p>
                    <Link to={"/kontakt"} className={style.description__button}>
                      WACH- & OBJEKTSCHUTZ ANFRAGEN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sicherheitsdienst;
