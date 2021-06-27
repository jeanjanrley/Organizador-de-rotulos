import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import codigo from '../'





export default function ContraRotulo(props){

    return(
        <div className="Page">
            <Aside/>
            <div className="contraRotulo">
                <h1>Consultar e Editar contra-rotulo</h1>
                <div className="separator"/>
                
                <input type="text" />


                <div>
                    <div className="camp-codigo-de-barras">
                        <img src={codigo} alt="" />
                    </div>
                    <button className="button-download" type='button'>fazer download da imagem</button>

                    <div className="camp-codigo-de-barras">
                        <input type="text" />
                        <button>gerar codigo de barras</button>
                        <button>gerar aleatorio</button>
                        <button>
                            4590713559255
                        </button>
                    </div>
                    <button className="button-download" type='button'>fazer download da imagem</button>

                </div>
            </div>
        </div>
    )
}