import React from 'react';
import Aside from '../../components/aside/index'
import '../home/styles.scss'

export default function Fragrancia(props){
    return(
        <div className="Page">
            <Aside/>
            <div className="fragrancia">
                <h1>Consultar e Editar Rotulos</h1>
            </div>
        </div>
    )
}