import style from './ProductSection.module.scss'
import Cards from '../Cards/Cards'

import {sneakersData} from '../Arr'


export default function ProductSection() {
    
    return (
        <div className={style.ProductSectionWrapper}>
            {sneakersData.map((sneek)=> (
                <Cards 
                    key={sneek.id}
                    title={sneek.title}
                    img={sneek.img}
                    price={sneek.price}
                />
            ))}
        </div>
    )
}
