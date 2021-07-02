import React from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import codigo from '../../assets/icons/codigo.png'
var JsBarcode = require('jsbarcode');





export default function ContraRotulo(props){

    function GerarCódigoDeBarras(elementoInput){
        /*A função JsBarcode não aceita string vazia*/
        if(!elementoInput.value){
            elementoInput.value = 0;
        }
        JsBarcode('#codBarras', elementoInput.value);
    }
    

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
                        <div>
                            <label>Digite um valor</label>
                            <input type="text" onChange={GerarCódigoDeBarras(this)}//>
                            </div>
                            <svg id="codBarras"></svg>
                        </div>
                        <button className="button-download" type='button'>fazer download da imagem</button>
                    </div>

                    <div className="box1">
                    <div className="camp-codigo-de-barras camp2">
                        <input placeholder="Digite o nº do codigo de barras" type="text" />
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