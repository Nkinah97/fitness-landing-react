import style from './Drawer.module.scss'
import Cards from '../Cards/Cards'

import sn1 from '../../assets/images/sneakers/1.svg'
import sn2 from '../../assets/images/sneakers/2.svg'

import likeActive from '../../assets/images/likeActive.svg'
import likeNoActive from '../../assets/images/likeNoActive.svg'

export default function Drawer({isOpen, onClose}) {

    return (
        <div className={style.drawerWrapper} style={{'display': isOpen ? 'block' : 'none'}}>
            <div className={style.drawerOverlay} onClick={onClose}></div>
            <div className={style.drawerContent}>
                <h3 className={style.basketTitle}>Корзина</h3>

                <Cards liked={likeActive} img={sn1} title='Nike Blazer Mid Suede' />
                <Cards liked={likeNoActive} img={sn2} title={'Nike Air Max 270'} />
            </div>
        </div>
    )
}