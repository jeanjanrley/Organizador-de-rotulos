import React from 'react';
import Aside from '../../components/aside/index'
import Filter from '../../components/filter/index'

import './styles.scss'


export default function Home(){
    return(
        <div className="Page">
            <Aside/>
            <main className="Home">

                <h1>Novo rotulo</h1>
                <div className="filterArea">
                    <Filter title="Categoria"/>
                    <Filter title="Fragrancia"/>
                    <Filter title="Volume"/>
                    <Filter title="Data"/>
                </div>

                <div className="contra-rotulo">
                    <span></span>
                    <input className="filter-rotulo"/>
                    <textarea/>
                    <button type="button">Enviar</button>
                </div>


            </main>
        </div>
    )
}