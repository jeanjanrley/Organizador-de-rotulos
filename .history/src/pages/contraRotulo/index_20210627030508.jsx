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

                <div className="filter-area">
                    <Filter title="Categoria"/>
                    <Filter title="Fragrancia"/>
                </div>

                <div className="contra-rotulo">
                </div>
                <div className="area">
                    <span>Contra Rotulo</span>
                    <textarea placeholder="Digite as informações do contra-rotulo" className="list-area"/>
                </div>
                <button  
            </div>
        </div>
    )
}