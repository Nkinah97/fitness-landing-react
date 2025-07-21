import style from './ProductSection.module.scss'
import Cards from '../Cards/Cards'

import sn1 from '../../assets/images/sneakers/1.svg'
import sn2 from '../../assets/images/sneakers/2.svg'
import sn3 from '../../assets/images/sneakers/3.svg'
import sn4 from '../../assets/images/sneakers/4.svg'
import sn5 from '../../assets/images/sneakers/5.svg'
import sn6 from '../../assets/images/sneakers/6.svg'
import sn7 from '../../assets/images/sneakers/7.svg'
import sn8 from '../../assets/images/sneakers/8.svg'
import sn9 from '../../assets/images/sneakers/9.svg'
import sn10 from '../../assets/images/sneakers/10.svg'
import sn11 from '../../assets/images/sneakers/11.svg'
import sn12 from '../../assets/images/sneakers/12.svg'


export default function ProductSection() {
    
    return (
        <div className={style.ProductSectionWrapper}>
            <Cards img={sn1} title='Nike Blazer Mid Suede' />
            <Cards img={sn2} title={'Nike Air Max 270'} />
            <Cards img={sn3} title={'Nike Blazer Mid Suede'} />
            <Cards img={sn4} title= {'Aka Boku Future Rider'} />
            <Cards img={sn5} title = {'Under Armour Curry 8'} />
            <Cards img={sn6} title={'Nike Kyrie 7'} />
            <Cards img={sn7} title = {'Jordan Air Jordan 11'} />
            <Cards img={sn8} title={'Nike LeBron XVIII'} />
            <Cards img={sn9} title={'Nike Lebron XVIII Low'} />
            <Cards img={sn10} title={'Nike Blazer Mid Suede'} />
            <Cards img={sn11} title={'Aka Boku Future Rider'} />
            <Cards img={sn12} title={'Nike Kyrie Flytrap IV'} />
        </div>
    )
}
