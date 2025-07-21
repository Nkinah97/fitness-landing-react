import styles from './Header-style.module.scss'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

import basket from '../../assets/images/basket.svg'
import like from '../../assets/images/like.svg'
import profile from '../../assets/images/user.svg'

export default function Header() {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerContent}>
                <div className={styles.headerLogo}>
                    <img className={styles.headerLogoImg} src={logo} />
                    <div className={styles.headerLogoText}>
                        <h3 className={styles.headerLogoTitle}>REACT SNEAKERS</h3>
                        <p className={styles.headerLogoDescription}>Магазин найкращих кросівок</p>
                    </div>
                </div>

                <div className={styles.userPanel}>
                    <ul className={styles.navList}>

                        <li>
                            <Link className={styles.navItem} to="/">
                                <img src={basket}></img>
                                <span className={styles.currencyNumber}>1234</span> <span className={styles.currency}>uan</span>
                            </Link>
                        </li>

                        <li>
                             <Link className={styles.navItem} to="/bookmarks">
                                 <img src={profile}></img>
                                 <span className={styles.currencyNumber}>Закладки</span>
                             </Link>
                         </li>

                         <li>
                             <Link className={styles.navItem} to="/profile">
                                 <img src={like}></img>
                                 <span className={styles.currencyNumber}>Профіль</span>
                             </Link>
                         </li>

                    </ul>
                </div>
            </div>
        </div>
        
    )

}
