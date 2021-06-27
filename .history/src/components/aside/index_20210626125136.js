import React from 'react'
import {Link} from 'react-router-dom'
import './styles.scss'
import add from '../../assets/icons/add.svg'
import prancher from '../../assets/icons/prancher.svg'
import direct from '../../assets/icons/direct.svg'
import codigo from '../../assets/icons/codigo.svg'

export default function Aside() {
    return(
        <aside>
            <div className="add">
                <Link className="Link" to={'/Home'}>
                    <img src={add} />
                </Link>
            </div>
            <div className="prancher">
                <Link className="Link" to={'/teste'}>
                    <img src={prancher} />
                </Link>
            </div>
            <div className="direct">
                <Link className="Link" to={'/teste'}>
                    <img src={direct} />
                </Link>
            </div>
            <div className="codigo">
                <Link className="Link" to={'/teste'}>
                    <img src={codigo} />
                </Link>
            </div>
        </aside>
    )
}