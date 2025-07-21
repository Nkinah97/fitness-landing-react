import banerImg from '../../assets/images/img-page-logo.svg'
import styles from './baner-style.module.scss'
export default function Banner() {
    return (
        <div className={styles.banerImg}>
            <img src={banerImg}></img>
        </div>
    )
}