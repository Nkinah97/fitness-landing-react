import heroImg from '../../assets/images/img-page-logo.svg'
import styles from './hero-style.module.scss'

export default function Hero() {
    return (
        <div className={styles.heroImg}>
            <img src={heroImg}></img>
        </div>
    )
}