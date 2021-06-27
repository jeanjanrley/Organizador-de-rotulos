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
                    <img src={add} />
                <Link className="Link" to={'/'}>
                    N-R
                </Link>
                <Link className="Link" to={'/consultar'}>
                    C-E
                </Link>
            </div>
            <div className="prancher">
                    <img src={prancher} />
                <Link className="Link" to={'/categoria'}>
                    CAt
                </Link>
                <Link className="Link" to={'/fragrancia'}>
                    FRA
                </Link>
                <Link className="Link" to={'/volume'}>
                    VOL
                </Link>
                <Link className="Link" to={'/responsavel-tecnico'}>
                    R-T
                </Link>
                <Link className="Link" to={'/contra-rotulo'}>
                    C-R
                </Link>
            </div>
            <div className="direct">
                    <img src={direct} />
                <Link className="Link" to={'/Home'}>
                    N-R
                </Link>
                <Link className="Link" to={'/Home'}>
                    C-E
                </Link>
            </div>
            <div className="codigo">
                    <img src={codigo} />
                <Link className="Link" to={'/Home'}>
                    N-R
                </Link>
                <Link className="Link" to={'/Home'}>
                    C-E
                </Link>
            </div>
        </aside>
    )
}