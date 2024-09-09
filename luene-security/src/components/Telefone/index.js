import style from './Telefone.module.scss'
function Telefone(){
    return(
        <>
        <a className={style.telefone__link} href="tel:+4917636666660">
                  Telefon: +49 176 36666630
                </a>
        </>
    )
}
export default Telefone