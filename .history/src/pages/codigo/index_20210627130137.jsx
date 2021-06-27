import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import codigo from '../../assets/icons/codigo.png'





export default function ContraRotulo(props){

    return(
        <div className="Page">
            <Aside/>
            <div className="codigo-de-barras">
                <h1>Consultar e Editar contra-rotulo</h1>

                <div>
                    <span>Tipo de codigo</span>
                    <input placeholder="Ex: EAN-13.."className="type-code" type="text" />
                </div>


                <div className="boxs-area">
                    <div className="box1">
                        <div className="camp-codigo-de-barras">
                            <img src={codigo} alt="" />
                        </div>
                        <button className="button-download" type='button'>fazer download da imagem</button>
                    </div>

                    <div className="box1">
                    <div className="camp-codigo-de-barras">
                        <input placeholder="digite o numero do codigo de barras" type="text" />
                        <button>gerar codigo de barras</button>
                        <button>gerar aleatorio</button>
                    </div>
                    <button>
                            4590713559255
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}