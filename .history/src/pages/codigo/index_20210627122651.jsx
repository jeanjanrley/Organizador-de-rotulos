import React, {useState} from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'
import Filter from '../../components/filter/index'






export default function ContraRotulo(props){

    return(
        <div className="Page">
            <Aside/>
            <div className="contraRotulo">
                <h1>Consultar e Editar contra-rotulo</h1>
                <div className="separator"/>
                
                <input type="text" />


                <div>
                    <div className="codigo-de-barras">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}