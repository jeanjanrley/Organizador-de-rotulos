import React from 'react'

import './style.scss'
import codigo from '../../assets/icons/codigo.png'
import save from '../../assets/icons/save.svg'

export default function Rotulo(props){
    return(
        <div className="rotulo">

            <div className="title-rotulo">
                <img src={save} alt="salvar"/>
                <h2>{props.nome}</h2>
                <input type="checkbox"/>
            </div>

            <div className="sub-rotulo">
                <textarea
                    value={props.value}
                />

                <div className="rotuloDados">
                    <div>
                        <span>Lote:</span> <span>{props.lote}</span>
                    </div>

                    <div>
                        <span>D. Prod:</span> <span>{props.data}</span>
                    </div>

                    <div>
                        <span>D. Val:</span> <span>{props.validade}</span>
                    </div>
                </div>

                <div className="codigo-de-barras">
                    <img src={codigo} alt="codigo de barras"/>
                </div>
                
            </div>
        </div>
    )
}