import style from './CardsStyle.module.scss'
import AddBtn from '../../assets/images/sneakers/add.svg'

export default function Cards({img, title}) {

    return (
        <div className={style.productCard}>
            <img className={style.cardImg} src={img} alt='logo'/>
            <p className={style.cardText}>
                {title}
            </p>
            <div className={style.cardPriceWrapper}>
                    <div className={style.priceTitle}>
                        <p className={style.cardPriceTitle}>Ціна:</p>
                        <p>$129</p>
                    </div>
                
                <button className={style.cardBtn}>
                    <img src={AddBtn} alt='logo'/>
                </button>
            </div>
        </div>
    )
    
}