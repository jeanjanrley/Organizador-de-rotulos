import React from 'react'
import './styles.scss'
import add from '../../assets/icons/add.svg'
import prancher from '../../assets/icons/prancher.svg'
import direct from '../../assets/icons/direct.svg'

export default function Aside() {
    return(
        <aside>
            <div className="add">
                <img src={add}/>
            </div>
            <div className="add">
                <img src={prancher}/>
            </div>
            <div className="add">
                <img src={direct}/>
            </div>
        </aside>
    )
}