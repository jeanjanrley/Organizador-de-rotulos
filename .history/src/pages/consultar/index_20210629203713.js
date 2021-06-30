import React, {useEffect, useState} from 'react';
import Aside from '../../components/aside/index'
import Filter from '../../components/filter/index'
import Rotulo from '../../components/rotulo/index'
import {firebase} from '../../services/firebase'

import '../home/styles.scss'


export default function Home(){
    var tudo = []

    const dbRef = firebase.database().ref('rotulos/').get().then((resultado) => {
        if (resultado.exists()) {
            const rotulos = resultado.val()
            const arrayDeObjetos = onabort.e

        } else {
            console.log("Nenhum dado foi encontrado!");
        }
    }).catch((error) => {
        console.log("O Bgl ficou doido ai em..");
    });




    
    // const RotulosList = arrayDeObejtosDefinitivo.map((objeto) => {
    //    return(<Rotulo title={`${objeto.categoria} | ${objeto.fragrancia} | ${objeto.medida} - ml `}  lote={objeto.lote} data={objeto.dataDeProdução} validade={objeto.validade}/>)            
    //})

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
                    <div className="contra-rotulo-count">
                        <span>Contra rotulo(s):</span>
                        <span>{arrayDeObejtosDefinitivo.length}</span>
                    </div>
                    <div className="contra-rotulo-space">
                        <button className="edicao">Habilitar edição</button>
                        <div className="contra-rotulo-area">
                            {RotulosList}
                        </div>
                    </div>
                </div>


            </main>
        </div>
    )
}