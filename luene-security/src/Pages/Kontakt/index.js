
import style from "./Kontakt.module.scss";
function Kontakt() {
  return (
    <>
      <h3 className={style.intro__titel_margin}>Einsatzgebiete</h3>
      <p className={style.intro__subtitle}>Lüneburg und Hamburg</p>
      <p className={style.intro__titel}>
        Kontakt: <br />
        Lünesecurity <br />
        Artlenburger Landstraße 15 <br />
        21339 Lüneburg <br />
        <a className={style.telefone__link} href="tel:+4917636666660">
                  Telefon: +49 176 36666630
                </a>
      </p>
      <p className={style.intro__subtitle}>
        Öffnungszeiten: <br />
        Mo. – Do.: 09:00 – 17:00 Uhr <br />
        Fr.: 09:00 -13:00 Uhr <br />
        Sa. – So.: geschlossen
      </p>
    </>
  );
}
export default Kontakt;
