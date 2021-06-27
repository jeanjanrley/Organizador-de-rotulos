import React from 'react'

import './style.scss'
import codigo from '../../assets/icons/codigo.png'
import save from '../../assets/icons/save.svg'

export default function Rotulo(props){
    return(
        <div className="rotulo">

            <div className="title-rotulo">
                <img src={save} alt="salvar"/>
                <h2>Aromatizante | Cereja e Aveia | 25 ml</h2>
                <input type="checkbox"/>
            </div>

            <div>
                <textarea/>
                <div clasName="rotulo-dados">
                    <div>
                        <span>Lote:</span> <span>20550055</span>
                        <span>D. Produção:</span> <span>10/06/2020</span>
                        <span>D. Validade:</span> <span>10/06/2020</span>
                    </div>
            </div>
                
            </div>
        </div>
    )
}