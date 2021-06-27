import React from 'react'
import './styles.scss'
import add from '../../assets/icons/add.svg'
import prancher from '../../assets/icons/prancher.svg'

export default function Aside() {
    return(
                <img src={add}/>
        <aside>
            <div className="add">
            </div>
            <div className="add">
                <img src={add}/>
            </div>
        </aside>
    )
}