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
                    <Filter title="Categorias"/>
                    <Filter title="Teste"/>
                    <Filter title="Teste"/>
                    <Filter title="Teste"/>
                </div>

                <div className="contra-rotulo">
                    <Filter title="teste"/>
                    <inputArea/>
                    <button type="button">Enviar</button>
                </div>


            </main>
        </div>
    )
}