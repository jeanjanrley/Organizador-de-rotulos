import React from 'react';
import Aside from '../../components/aside/index'
import Filter from '../../components/filter/index'

import './styles.scss'


export default function Home(){
    return(
        <div className="Page">
            <Aside/>
            <main>

                <h1>Novo rotulo</h1>
                <div className="filterArea">
                    <Filter title=""/>
                    <Filter title=""/>
                    <Filter title=""/>
                    <Filter title=""/>
                </div>

                <div className="contra-rotulo">
                    <Filter/>
                    <inputArea/>
                    <button type="button">Enviar</button>
                </div>


            </main>
        </div>
    )
}