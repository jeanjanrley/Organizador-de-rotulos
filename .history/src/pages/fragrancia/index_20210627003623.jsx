import React from 'react';
import Aside from '../../components/aside/index'
import './styles.scss'

export default function Fragrancia(props){
    return(
        <div className="Page">
            <Aside/>
            <div className="fragrancia">
                <h1>Consultar e Editar Rotulos</h1>
                <input type="text"/>
                <button type="button">adcionar</button>
                <div className="list-area">
                </div>  
            </div>
        </div>
    )
}