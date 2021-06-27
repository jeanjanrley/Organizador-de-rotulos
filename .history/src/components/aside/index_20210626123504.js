import React from 'react'
import './styles.scss'
import add from '../../assets/icons/add.svg'
import prancher from '../../assets/icons/prancher.svg'

export default function Aside() {
    return(
        <aside>
            <div className="add"></div>
            <img src={add}/>
        </aside>
    )
}