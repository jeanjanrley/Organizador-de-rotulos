import React from 'react';
import Aside from '../../components/aside/index'
import Filter from '../../components/filter/index'

import '../home/styles.scss'


export default function Home(){
    return(
        <div className="Page">
            <Aside/>
            <main className="Home">

                <h1>Consultar e Editar Rotulos</h1>
                <div className="filterArea">
                    <Filter title="Categoria"/>
                    <Filter title="Fragrancia"/>
                    <Filter title="Volume"/>
                    <Filter title="Res. Tecnico"/>
                </div>

                <div className="contra-rotulo">
                    <div>
                        <span>Contra rotulo</span>

                    </div>
                    <input list="contra-rotulos" className="filter-rotulo"/>

                    <datalist id='contra-rotulos'>
                        <option value='Aromatizante - Cereja e aveia - 250 ml'/>
                    </datalist>

                    <textarea/>
                    <button onClick={() => alert('Enviado com sucesso!')} type="button">Enviar</button>
                </div>


            </main>
        </div>
    )
}