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

                <div className="container-type-code">
                    <span>Tipo de codigo</span>
                    <input placeholder="Ex: EAN-13.."className="type-code" type="text" />
                </div>


                <div className="boxs-area">
                    <div className="box1">
                        <div className="camp-codigo-de-barras camp1">
                            <img src={codigo} alt="" />
                        </div>
                        <button className="button-download" type='button'>fazer download da imagem</button>
                    </div>

                    <div className="box1">
                    <div className="camp-codigo-de-barras">
                        <input placeholder="digite o numero do codigo de barras" type="text" />
                        <button className='first-button' onClick={() => alert('funcionando')}>gerar codigo de barras</button>
                        <button className='second-button'>gerar aleatorio</button>
                    </div>
                    <button className="copy-code">
                            4590713559255
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}