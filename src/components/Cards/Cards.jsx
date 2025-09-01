import style from './CardsStyle.module.scss'
import AddBtn from '../../assets/images/sneakers/add.svg'
import AddBtnDone from '../../assets/images/addDone.svg'
import { useState } from 'react'
import likeActive from '../../assets/images/likeActive.svg'
import likeNoActive from '../../assets/images/likeNoActive.svg'

export default function Cards({img, title}) {

    const [isLiked, setLiked] = useState(false)
    const [addBtn, setAddBtn] = useState(false)

    function handleAddBtn() {
        setAddBtn(!addBtn)
    }

    function handleclick() {
        setLiked(!isLiked)
    }

    return (
        <div className={style.productCard}>
            <div className={style.likeStatus}
                  onClick={handleclick}>
                <img className={style.likeStatusImg} src={isLiked ? likeActive : likeNoActive}></img>
            </div>

            <img className={style.cardImg} src={img} alt='logo'/>
            <p className={style.cardText}>
                {title}
            </p>
            <div className={style.cardPriceWrapper}>
                    <div className={style.priceTitle}>
                        <p className={style.cardPriceTitle}>Ціна:</p>
                        <p className={style.cardPriceDolar}>129$</p>
                    </div>
                
                <button className={style.cardBtn}
                onClick={handleAddBtn}>

                    <img src={addBtn ? AddBtnDone : AddBtn} alt='logo'/>
                    
                </button>
            </div>
        </div>
    )
    
}