import style from './Title-Search.module.scss'
import React, { useState } from 'react';

import Search from '../../assets/images/Search.svg'
export default function TitleSearch() {
    const [searchTeam, setSearchTeam] = useState('')
    const handleSearch = (event) => {
        setSearchTeam(event.target.value)
    }
    
    return (
        <div className={style.formWrapper}>
            <h3>Всі кросівки</h3>
            <div className={style.inputSearch}>
                <img src={Search} alt=''/>
                <input className={style.input}
                value={searchTeam}
                type='text'
                onChange={handleSearch}
                placeholder='Пошук...'/>
            </div>
        </div>
    )
}

